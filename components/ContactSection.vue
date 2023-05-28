<template>
          <section class="contact bg-gray-900 text-white py-16" data-aos="fade-up">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="contact-info">
              <h3 class="text-xl font-bold mb-4">Company Name</h3>
              <p class="text-gray-400 mb-4">123 Main Street, City, Country</p>
              <p class="text-gray-400 mb-4">contact@example.com</p>
              <p class="text-gray-400">+1 123 456 7890</p>
            </div>
            <div class="contact-form">
              <form class="w-full relative">
                <div class="mb-4">
                  <input type="text" placeholder="Your Name" class="form-input">
                </div>
                <div class="mb-4">
                  <input type="email" placeholder="Your Email" class="form-input">
                </div>
                <div class="mb-4">
                  <textarea placeholder="Your Message" class="form-textarea"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
</template>
  
<style scoped>




.form-input {
  border: 2px solid #e5e5e5;
  padding: 8px;
  width: 100%;
}

.form-textarea {
  width: 100%;

  border: 2px solid #e5e5e5;
  padding: 8px;
  height: 120px;
}

.footer {
  background-color: #333333;
}
</style>