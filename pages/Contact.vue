<template>
    <div>
      <!-- Hero Section -->
      <section class="hero bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-24">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien ac augue tempor mollis.</p>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section class="contact py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="contact-info">
              <h2 class="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
              <p class="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien ac augue tempor mollis.</p>
              <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                <p class="text-gray-700">123 Main Street, City, Country</p>
              </div>
              <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <p class="text-gray-700">contact@example.com</p>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                <p class="text-gray-700">+1 123 456 7890</p>
              </div>
            </div>
            <div class="contact-form">
              <h2 class="text-3xl md:text-4xl font-bold mb-8">Send us a Message</h2>
              <form>
                <div class="mb-4">
                  <label for="name" class="block text-lg text-gray-700 mb-2">Your Name</label>
                  <input type="text" id="name" placeholder="Your Name" class="form-input">
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-lg text-gray-700 mb-2">Your Email</label>
                  <input type="email" id="email" placeholder="Your Email" class="form-input">
                </div>
                <div class="mb-4">
                  <label for="message" class="block text-lg text-gray-700 mb-2">Your Message</label>
                  <textarea id="message" placeholder="Your Message" class="form-textarea"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
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
  
  .contact-info {
    background-color: #ffffff;
    padding: 24px;
    border-radius: 8px;
  }
  
  .contact-form {
    background-color: #ffffff;
    padding: 24px;
    border-radius: 8px;
    border: 2px solid #e5e5e5;
  }
  
  .form-input {
    border: 2px solid #e5e5e5;
    padding: 8px;
  }
  
  .form-textarea {
    border: 2px solid #e5e5e5;
    padding: 8px;
    height: 120px;
  }
  
  .footer {
    background-color: #333333;
  }
  </style>
  