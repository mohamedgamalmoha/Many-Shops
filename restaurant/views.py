from django.shortcuts import render, get_object_or_404

from .models import Restaurant


def extract_subdomain(request):
    # Get the full host (e.g., 'subdomain.localhost:8000')
    full_host = request.get_host()

    # Split the host by dots
    parts = full_host.split('.')

    # The first part is the subdomain
    subdomain = parts[0]

    # If there's a port (e.g., 'subdomain.localhost:8000'), remove it
    subdomain = subdomain.split(':')[0]

    return subdomain


def restaurant_details(request, restaurant_slug=None):
    subdomain = restaurant_slug
    if subdomain is None:
        subdomain = extract_subdomain(request)

    if subdomain.isnumeric():
        subdomain = int(subdomain)

    restaurant = get_object_or_404(Restaurant, id=int(subdomain))

    return render(request, 'details.html', {'restaurant': restaurant})
