<template>
  <div class="">
    <!-- Hero Section -->
    <section class="relative min-h-screen my-8">
      <div class="flex h-screen w-screen items-center">
        <img class="w-full h-full" src="../public/pic1.jpg" alt="" />
        <div
          class="absolute top-1/3 font-mono sm:w-1/3 w-full p-4 left-9 text-white bg-opacity-50 bg-white"
        >
          <h1 class="text-3xl font-bold">THA PUBLICATIONS</h1>
        </div>
        <div
          class="absolute -bottom-3 font-mono sm:w-3/4 w-full p-4 bg-white"
          style="left: 12.5%"
        >
          <p class="text-2xl mt-2">
            The Triple Helix concept has generated a significant body of
            research and publications over the years. Here are a few notable
            publications related to the Triple Helix model
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16" id="features" data-aos="zoom-in">
      <div class="mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white border pb-6" style="max-width: 469px">
            <div class="flex w-full justify-end">
              <div
                class="bg-blue-500 text-white p-2 px-4 text-lg font-semibold"
              >
                Article
              </div>
            </div>
            <p class="text-blue-500 italic text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
            <p class="text-blue-500 italic text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
            <p class="text-blue-500 italic text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
          <div class="bg-white border pb-6" style="max-width: 469px">
            <div class="flex w-full justify-end">
              <div
                class="bg-blue-500 text-white text-lg p-2 px-4 font-semibold"
              >
                Article
              </div>
            </div>
            <p class="text-blue-500 italic text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
            <p class="text-blue-500 italic text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
            <p class="text-blue-500 italic text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </section>

    <hr />

    <!-- What we do Section -->
    <section
      class="testimonials text-white px-6 justify-between py-16 flex flex-col md:flex-row"
      data-aos="fade-left"
    >
      <div class="flex w-full md:w-3/4 justify-center mx-auto items-center">
        <div class="bg-blue-500 w-full text-white p-6">
          <h1 class="text-lg font-semibold">Comparison Guide</h1>
          <h1 class="text-lg font-semibold">THA Publications</h1>
          <p class="my-4 text-lg" style="max-width: 378px">
            The concept of the Triple Helix has sparked extensive research and
            numerous publications over time
          </p>
          <button class="bg-white text-black rounded-lg p-2 px-4">
            Read More
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section
      class="testimonials text-white px-6 justify-between py-16 flex flex-col md:flex-row"
      data-aos="fade-left"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white flex flex-col items-start justify-between">
          <div class="mb-4">
            <h3 class="text-2xl text-black font-bold mb-2 px-8">Industry</h3>
            <p class="text-gray-700 text-start px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed feugiat consectetur ullamcorper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
            <p>
          Ipsum dolor sit amet,
              consectetur adipiscing elit. Sed feugiat consectetur ullamcorper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
          <div class="flex flex-col">
            <h3 class="text-2xl text-black text-start font-bold mb-2 px-8">
              Industry
            </h3>
            <p class="text-gray-700 text-start px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed feugiat consectetur ullamcorper.
            </p>
          </div>
        </div>
        <div class="bg-white">
          <img
            src="../assets/big-engineer.png"
            alt="Feature 1"
            class="mb-4 mx-auto w-full"
          />
        </div>
      </div>
    </section>
    <!-- Footer Section -->
    <Footer />
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
img {
  max-width: 100%;
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
.h1 {
  overflow: hidden;
  text-align: center;
  font-weight: 700;
  font-size: x-large;
}
.h1:before,
.h1:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 30%;
}
.style-absolute {
  left: -40px;
}
@media (max-width: 768px) {
  .style-absolute {
    left: 25%;
    top: -5%;
  }
}
.h1:before {
  right: 0.5em;
  margin-left: -30%;
}
.h1:after {
  left: 0.5em;
  margin-right: -30%;
}
</style>
