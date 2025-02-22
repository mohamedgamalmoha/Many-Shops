import os
import re
from django.conf import settings
from django.core.management.base import BaseCommand


FRONTEND_DIR = settings.REACT_JS_BUILD_DIR
TEMPLATE_NAME = 'index.html'


class Command(BaseCommand):
    help = 'Updates the frontend index.html file with static file paths and adjusts links'

    def add_arguments(self, parser):
        parser.add_argument(
            '--folder-path',
            type=str,
            help='Path to the folder containing the file',
            default=FRONTEND_DIR,
        )
        parser.add_argument(
            '--file-name',
            type=str,
            help='Name of the file to process',
            default=TEMPLATE_NAME
        )
        parser.add_argument(
            '--remove-prefix',
            action='store_true',
            help='Remove prefixes from static file paths',
            default=False
        )

    def handle(self, *args, **options):
        folder_path = options['folder_path']
        file_name = options['file_name']
        remove_prefix = options['remove_prefix']

        full_path = os.path.join(folder_path, file_name)

        # Check if file exists
        if not os.path.exists(full_path):
            self.stdout.write(
                self.style.ERROR(f'File not found at {full_path}')
            )
            return

        try:
            # Read the index file
            with open(full_path, 'r') as file:
                content = file.read()

            # Add {% load static %} if not present
            if '{% load static %}' not in content:
                content = '{% load static %}\n' + content

            # Update static files
            content = self._update_static_files(content, remove_prefix)

            # Update links
            content = self._update_links(content)

            # Save modified content
            with open(full_path, 'w') as file:
                file.write(content)

            self.stdout.write(
                self.style.SUCCESS(f'Successfully updated static links in {file_name}')
            )

        except Exception as e:
            self.stdout.write(
                self.style.ERROR(f'Error updating static links: {str(e)}')
            )

    def _update_static_files(self, content, remove_prefix):
        """Update paths for static files (CSS, JS, images)"""

        def process_path(match):
            path = match.group(1)
            if remove_prefix:
                # Remove common prefixes like /static/, /assets/, etc.
                path = re.sub(r'^/(static|assets|dist|build)/', '', path).replace('/', '')
            return f"{{% static '{path}' %}}"

        # CSS files
        content = re.sub(
            r'href=["\'](?!http|https|{%)([^"\']+)["\']',
            lambda m: f'href="{process_path(m)}"',
            content
        )

        # JS files
        content = re.sub(
            r'src=["\'](?!http|https|{%)([^"\']+)["\']',
            lambda m: f'src="{process_path(m)}"',
            content
        )

        # Images
        content = re.sub(
            r'<img[^>]+src=["\'](?!http|https|{%)([^"\']+)["\']',
            lambda m: m.group(0).replace(
                f'src="{m.group(1)}"',
                f'src="{process_path(m)}"'
            ),
            content
        )

        return content

    def _update_links(self, content):
        """Update href attributes in anchor tags"""

        def replace_link(match):
            href = match.group(1)
            # Skip special links
            if href.startswith(('http://', 'https://', '#', '{%', 'mailto:')):
                return match.group(0)
            # Convert path to URL name
            url_name = href.lstrip('/').replace('/', ':')
            return f'href="{{% url \'{url_name}\' %}}"'

        content = re.sub(
            r'<a[^>]+href=["\']([^"\']+)["\']',
            replace_link,
            content
        )

        return content
