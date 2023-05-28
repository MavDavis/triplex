<template>
    <div>
      <!-- Hero Section -->
      <section class="hero bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-24">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Events</h1>
          <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien ac augue tempor mollis.</p>
        </div>
      </section>
  
      <!-- Events Section -->
      <section class="events py-16" data-aos="fade-down">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="event-card bg-white rounded-lg p-8 shadow-md" data-aos="fade-right">
              <div class="event-image">
                <img src="path/to/event-image-1.jpg" alt="Event 1" class="w-full rounded-lg">
              </div>
              <div class="event-details">
                <h3 class="text-xl font-bold mb-2">Event 1</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="event-card bg-white rounded-lg p-8 shadow-md" data-aos="fade-up">
              <div class="event-image">
                <img src="path/to/event-image-2.jpg" alt="Event 2" class="w-full rounded-lg">
              </div>
              <div class="event-details">
                <h3 class="text-xl font-bold mb-2">Event 2</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="event-card bg-white rounded-lg p-8 shadow-md" data-aos="fade-left">
              <div class="event-image">
                <img src="path/to/event-image-3.jpg" alt="Event 3" class="w-full rounded-lg">
              </div>
              <div class="event-details">
                <h3 class="text-xl font-bold mb-2">Event 3</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer Section -->
      <footer class="footer bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  .hero {
    background-image: url('path/to/hero-background.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .events {
    background-color: #f8f8f8;
  }
  
  .event-card {
    transition: transform 0.3s ease;
  }
  
  .event-card:hover {
    transform: translateY(-5px);
  }
  
  .event-image {
    height: 200px;
    overflow: hidden;
  }
  
  .event-details {
    padding: 16px 0;
  }
  
  .footer {
    background-color: #333333;
  }
  </style>
  