<template>
  <div id="app">
    <header>
      <h1>{{ businessName }}</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><a href="https://www.instagram.com/"><button>Follow Us on Instagram</button></a></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; {{ currentYear }} {{ businessName }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      businessName: 'My Business Name',
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
/* Global styles */
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f1f1f1;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul li {
  margin-right: 20px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

nav ul li a:hover {
  background-color: #ddd;
  color: #333;
}

button {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #ddd;
  color: #333;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

footer p {
  font-size: 14px;
}

/* Component-specific styles */
.about h2,
.products h2 {
  margin-bottom: 20px;
}

.products li h3 {
  margin-bottom: 10px;
}

.products li p {
  margin-bottom: 20px;
}

</style>