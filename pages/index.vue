<template>
  <div>
    <!-- Hero Section -->
    <section
      class="hero relative bg-gradient-to-r min-h-screen from-purple-500 to-indigo-500 text-black py-24"
    >
      <div
        class="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-b from-white via-white/60 to-transparent"
      ></div>
      <div class="container mx-auto  flex justify-center flex-col px-4 relative">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Triple Helix <br />
          <span
            class="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-600"
            >NIGERIA CHAPTER</span
          >
        </h1>
        <p class="text-lg mb-8 font-semibold">
          Join us in harnessing the power of the triple helix model for
          innovation, collaboration, and economic growth.
        </p>
        <a href="#features" class="btn"
          >Get Started <span class="up font-semibold">></span></a
        >
      </div>
    </section>

    <!-- Features Section -->
    <section class="features py-16" id="features" data-aos="zoom-in">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Features
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature bg-white rounded-lg p-8 shadow-md">
            <img
              src="path/to/feature-icon-1.png"
              alt="Feature 1"
              class="mb-4 mx-auto"
            />
            <h3 class="text-xl font-bold mb-2">Feature 1</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
          <div class="feature bg-white rounded-lg p-8 shadow-md">
            <img
              src="path/to/feature-icon-2.png"
              alt="Feature 2"
              class="mb-4 mx-auto"
            />
            <h3 class="text-xl font-bold mb-2">Feature 2</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
          <div class="feature bg-white rounded-lg p-8 shadow-md">
            <img
              src="path/to/feature-icon-3.png"
              alt="Feature 3"
              class="mb-4 mx-auto"
            />
            <h3 class="text-xl font-bold mb-2">Feature 3</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing py-16" data-aos="fade-right">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Pricing
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="pricing-card bg-white rounded-lg p-8 shadow-md text-center"
          >
            <h3 class="text-2xl font-bold mb-4">Basic</h3>
            <p class="text-3xl font-bold mb-4">$19</p>
            <ul class="text-gray-700 mb-8">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <a href="#" class="btn btn-primary">Select Plan</a>
          </div>
          <div
            class="pricing-card bg-white rounded-lg p-8 shadow-md text-center"
          >
            <h3 class="text-2xl font-bold mb-4">Pro</h3>
            <p class="text-3xl font-bold mb-4">$39</p>
            <ul class="text-gray-700 mb-8">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
            <a href="#" class="btn btn-primary">Select Plan</a>
          </div>
          <div
            class="pricing-card bg-white rounded-lg p-8 shadow-md text-center"
          >
            <h3 class="text-2xl font-bold mb-4">Premium</h3>
            <p class="text-3xl font-bold mb-4">$79</p>
            <ul class="text-gray-700 mb-8">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
            <a href="#" class="btn btn-primary">Select Plan</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials bg-gray-100 py-16" data-aos="fade-left">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="testimonial bg-white rounded-lg p-8 shadow-md">
            <p class="text-gray-700 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper."
            </p>
            <h4 class="text-lg font-bold">John Doe</h4>
            <p class="text-gray-600">CEO, Company Name</p>
          </div>
          <div class="testimonial bg-white rounded-lg p-8 shadow-md">
            <p class="text-gray-700 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper."
            </p>
            <h4 class="text-lg font-bold">Jane Smith</h4>
            <p class="text-gray-600">CTO, Company Name</p>
          </div>
          <div class="testimonial bg-white rounded-lg p-8 shadow-md">
            <p class="text-gray-700 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper."
            </p>
            <h4 class="text-lg font-bold">Sarah Johnson</h4>
            <p class="text-gray-600">COO, Company Name</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq py-16" data-aos="flip-left">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="faq-item bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-xl font-bold mb-4">Question 1?</h3>
            <p class="text-gray-700 mb-8">Answer to question 1.</p>
          </div>
          <div class="faq-item bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-xl font-bold mb-4">Question 2?</h3>
            <p class="text-gray-700 mb-8">Answer to question 2.</p>
          </div>
          <div class="faq-item bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-xl font-bold mb-4">Question 3?</h3>
            <p class="text-gray-700 mb-8">Answer to question 3.</p>
          </div>
          <div class="faq-item bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-xl font-bold mb-4">Question 4?</h3>
            <p class="text-gray-700 mb-8">Answer to question 4.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
  <ContactSection/>

    <!-- Footer Section -->
    <footer class="footer bg-gray-800 text-white py-8" >
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.hero {
  background-image: url("/pic1.jpg");
  background-size: cover;
  background-position: center;
}

.features {
  background-color: #f8f8f8;
}
.feature {
  transition: transform 0.5s ease;
}
.feature:hover {
  transform: translateX(-5px);
}
.feature {
  text-align: center;
}

.pricing-card {
  border: 2px solid #e5e5e5;
}

.testimonial {
  background-color: #f8f8f8;
}

.faq-item {
  border: 2px solid #e5e5e5;
}

.contact {
  background-image: url("path/to/contact-background.jpg");
  background-size: cover;
  background-position: center;
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
@-webkit-keyframes uparrow {
  0% {
    -webkit-transform: translateX(0);
    opacity: 0.4;
  }
  100% {
    -webkit-transform: translateX(-0.4em);
    opacity: 0.9;
  }
}

.up {
  -webkit-animation: uparrow 0.6s infinite alternate ease-in-out;
  /* border-bottom:2em solid #00b6f1; */
}
</style>
