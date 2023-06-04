<template>
  <div class="">
    <!-- Hero Section -->
    <section class="relative min-h-screen my-8 ">
      <div
        class="flex h-screen w-screen  items-center"
      >
   <img class="w-full h-full" src="../public/pic1.jpg" alt="">
   <div class="absolute top-1/3 font-mono sm:w-1/3 w-full p-4 left-9 text-white bg-opacity-50 bg-white">
<h1 class="text-3xl font-bold">Contact Us</h1>
<p class="text-2xl mt-2">We connect the world's top talent 
with the world's top organizations</p>
   </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16" id="features" data-aos="zoom-in">
      <p class="text-red-400">Leadership Teams</p>
      <div class="mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

          <div class="bg-white" v-for="(item, i) in 6" :key="i">
            <img
              src="../assets/image5.png"
              alt="Feature 1"
              class="mb-4 mx-auto w-full"
            />
            <h3 class="text-xl font-bold mb-2  text-center px-8">
              Industry
            </h3>
            <p class="text-gray-700 text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </section>

<hr/>

    <!-- What we do Section -->
    <section
      class="testimonials text-white px-6 justify-between  py-16 flex flex-col md:flex-row"
      data-aos="fade-left"
    >
    <div class="grid grid-cols-1 md:grid-cols-2  gap-4">
    

          <div class="bg-white">
              <h3 class="text-2xl text-black font-bold mb-2  text-center px-8">
              Industry
            </h3>
            <img
              src="../assets/big-engineer.png"
              alt="Feature 1"
              class="mb-4 mx-auto w-full"
            />
            <h3 class="text-lg text-gray-700 text-start font-bold mb-2   px-8">
              Industry
            </h3>
            <p class="text-gray-700 text-start px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
           <div class="bg-white">
              <h3 class="text-2xl text-black font-bold mb-2  text-center px-8">
              Industry
            </h3>
            <img
              src="../assets/big-engineer.png"
              alt="Feature 1"
              class="mb-4 mx-auto w-full"
            />
            <h3 class="text-lg text-black font-bold mb-2  text-start px-8">
              Industry
            </h3>
            <p class="text-gray-700 text-start px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
        </div>
    </section>

  <!-- Features Section -->
  <section class="py-16" id="features" data-aos="zoom-in">
      <div class="bg-blue-600 flex md:flex-row flex-col text-white  " style="min-height:369px;">
<div class="md:w-3/5 w-full h-full py-6 pl-6">
  <p>Plot 76A Fiddil Avenue, off Ordinance Road,
Trans Amadi Industrial Layout,
Port Harcourt, Nigeria.
</p>
<p class="my-2">+234(0)8111113988, +234(0)8111113974</p>
<a href="www.triplehelixnigeria.com
">www.triplehelixnigeria.com</a>
</div>
<div class="w-full md:w-2/5  bg-black md:min-h-full md:h-full h-36  relative">
  <div class="absolute top-1/4 z-10  h-1/2" style="left:-20px">
    <img class="h-full" src="../public/pen.jpeg"/>
  </div>
</div>
      </div>
    </section>
    <!-- Footer Section -->
    <Footer/>
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
.h1:before {
    right: 0.5em;
    margin-left: -30%;
}
.h1:after {
    left: 0.5em;
    margin-right: -30%;
}
</style>
