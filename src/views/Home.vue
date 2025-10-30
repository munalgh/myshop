<script setup>
import Header from '/src/components/Header.vue'
import HeroBanner from '/src/components/HeroBanner.vue'
import CategoryGrid from '/src/components/CategoryGrid.vue'
import PromoSection from '/src/components/PromoSection.vue'
import EcoBanner from '/src/components/EcoBanner.vue'
import FavSection from '/src/components/FavSection.vue'
import Reviews from '/src/components/Reviews.vue'
import Recommendation from '/src/components/Recommendation.vue'
import CustomerGallery from '/src/components/CustomerGallery.vue'
import ShipInfo from '/src/components/ShipInfo.vue'
import Footer from '/src/components/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <HeroBanner />
    <CategoryGrid />
    <PromoSection />
    <EcoBanner />
    <FavSection />
    <Reviews />
      <br>
      <hr>
      <br>
    <Recommendation />
      <br>
      <hr>
      <br>
    <CustomerGallery />
    <ShipInfo />
    <Footer />
  </div>
</template>
