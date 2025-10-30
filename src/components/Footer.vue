<script setup>
import ArrowButton from './Icons/ArrowButton.vue'
</script>

<template>
    <footer class="bg-[#F5F4F4] py-12 px-9">
        <div class="text-gray-500 grid grid-cols-2 md:grid-cols-5 gap-6 mb-15">
            <div>
              <h3 class="font-bold mb-2">Account</h3>
                <ul class="text-sm">
                  <li>Log in</li>
                  <li>Sign up</li>
                  <li>Redeem Gift Card</li>
                </ul>
            </div>
            <div>
              <h3 class="font-bold mb-2">Company</h3>
              <ul class="text-sm">
                <li>About</li>
                <li>Enviromental Initiatives</li>
                <li>Factories</li>
                <li>DEI</li>
                <li>Careers</li>
                <li>International</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold mb-2">Get Help</h3>
              <ul class="text-sm">
                <li>Help Center</li>
                <li>Return Policy</li>
                <li>Shipping Info</li>
                <li>Bulk Orders</li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold mb-2">Connect</h3>
              <ul class="text-sm">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Affiliates</li>
                <li>Out Stores</li>
              </ul>
            </div>

          <div class="mt-6 text-sm">
            <div class="flex items-center">
              <input type="email" placeholder="Email Address" class="flex-1 px-4 py-2 border border-gray-300 rounded-l-md bg-white focus:outline-none focus:ring-2 focus:ring-black" />
              <ArrowButton />
            </div>
          </div>
        </div>

          <div class="text-sm mt-6 text-gray-500 text-center">
            <p class="mb-4">Privacy Policy | Terms of Service | Do Not Sell or Share My Personal Info | CS Supply Chain Transparency | Vendor Code of Conduct | Sitemap Pages | Sitemap Products</p>
            <p>© 2023 All Rights Reserved</p>
          </div>
    </footer>
</template>