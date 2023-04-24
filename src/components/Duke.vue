<template>
  <div class="duke">
    <h1>In Loving Memory of Duke</h1>
    <img src="@/assets/img/DukeMain.jpg" alt="Duke, the beloved Doberman" />
    <p>Duke was a loving and loyal Doberman who brought joy and happiness to our lives. He will be forever missed and cherished in our hearts. This website is dedicated to his memory and the love he shared with everyone he met.</p>
    <h3>Share Your Memories of Duke</h3>
    <p>If you have any stories, photos, or memories of Duke that you'd like to share, please feel free to email them to us at: <a href="mailto:memories@dukesmemory.com">memories@dukesmemory.com</a>.</p>
  </div>
</template>

<script>
export default {
  name: "DukePage",
};
</script>
<style scoped>
.duke {
  padding: 50px 0;
  text-align: center;
}

.duke img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
}

.duke h3 {
  margin: 30px 0 15px;
}

@media (max-width: 768px) {
  .duke {
    padding: 10px;
  }
}
</style>
