<template>
<div class="footer bg-blue-500 text-white">
    <div class="container">
        <div class="row">
            <div class="footer-col-2">
          <img src="images/logo-white.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, amet.</p>
            </div>
            <div class="footer-col-3">
             <h3>Useful links</h3>
             <ul>
                <li>Coupons</li>
                <li>Blog post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
            </ul>
                  </div>
                  <div class="footer-col-4">
                    <h3>Follow us</h3>
                    <ul>
                       <li>Facebook</li>
                       <li>Twitter</li>
                       <li>Instagram</li>
                       <li>Youtube</li>
                   </ul>
                 </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.row{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}
.footer{
   margin-top: 10px;
    font-size: 14px;
    padding: 60px 0 20px;
}

.footer h3{
    color: #fff;
    margin-bottom: 20px;
    text-decoration: underline;
    font-size: 1.7rem;
    line-height: 2rem;
    font-weight: 500;
}
.footer-col-1,.footer-col-2,.footer-col-3,.footer-col-4{
min-width: 250px;
margin-bottom: 20px;
} 
.footer-col-1{
    flex-basis: 30%;
}
.footer-col-2{
    flex: 1;
    text-align: center;
}
.footer-col-2 img{
    margin-bottom: 20px;
    width: 180px;
}

.footer-col-3, .footer-col-4{
    flex-basis: 12%;
    text-align: center;
}
ul{
    list-style-type: none;
}

.footer hr{
    border: none;
   background:#b5b5b5 ;
   height: 1px;
   margin: 20px 0;

}



@media only screen and (max-width:600px){
.row{
    text-align: center;
}
.col-2, .col-3, .col-4{
    flex-basis: 100%;
}
}
</style>
