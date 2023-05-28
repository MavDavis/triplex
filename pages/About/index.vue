<template>
    <div>
      <!-- Hero Section -->
      <section class="hero bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-24">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien ac augue tempor mollis.</p>
          <a href="#" class="btn btn-primary">Get in Touch</a>
        </div>
      </section>
  
      <!-- Mission Section -->
      <section class="mission py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission</h2>
          <p class="text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien ac augue tempor mollis.</p>
          <img src="path/to/mission-image.jpg" alt="Mission Image" class="mx-auto mb-8">
          <p class="text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien ac augue tempor mollis.</p>
        </div>
      </section>
  
      <!-- Team Section -->
      <section class="team bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="team-member bg-white rounded-lg p-8 shadow-md text-center">
              <img src="path/to/team-member-1.jpg" alt="Team Member 1" class="mx-auto mb-4 rounded-full w-32 h-32">
              <h3 class="text-xl font-bold mb-2">John Doe</h3>
              <p class="text-gray-700 mb-2">Founder & CEO</p>
              <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="team-member bg-white rounded-lg p-8 shadow-md text-center">
              <img src="path/to/team-member-2.jpg" alt="Team Member 2" class="mx-auto mb-4 rounded-full w-32 h-32">
              <h3 class="text-xl font-bold mb-2">Jane Smith</h3>
              <p class="text-gray-700 mb-2">CTO</p>
              <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="team-member bg-white rounded-lg p-8 shadow-md text-center">
              <img src="path/to/team-member-3.jpg" alt="Team Member 3" class="mx-auto mb-4 rounded-full w-32 h-32">
              <h3 class="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p class="text-gray-700 mb-2">COO</p>
              <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Values Section -->
      <section class="values py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="value bg-white rounded-lg p-8 shadow-md text-center">
              <img src="path/to/value-icon-1.svg" alt="Value 1" class="mx-auto mb-4 w-12 h-12">
              <h3 class="text-xl font-bold mb-2">Value 1</h3>
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="value bg-white rounded-lg p-8 shadow-md text-center">
              <img src="path/to/value-icon-2.svg" alt="Value 2" class="mx-auto mb-4 w-12 h-12">
              <h3 class="text-xl font-bold mb-2">Value 2</h3>
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="value bg-white rounded-lg p-8 shadow-md text-center">
              <img src="path/to/value-icon-3.svg" alt="Value 3" class="mx-auto mb-4 w-12 h-12">
              <h3 class="text-xl font-bold mb-2">Value 3</h3>
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Contact Section -->
<ContactSection/>
  
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
  
  .mission {
    background-color: #f8f8f8;
  }
  
  .team {
    background-color: #ffffff;
  }
  
  .team-member {
    border: 2px solid #e5e5e5;
  }
  
  .values {
    background-color: #f8f8f8;
  }
  
  .value {
    border: 2px solid #e5e5e5;
  }
  
  .contact {
    background-image: url('path/to/contact-background.jpg');
    background-size: cover;
    background-position: center;
  }
  

  .footer {
    background-color: #333333;
  }
  </style>
  