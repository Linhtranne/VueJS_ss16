<template>
    <div>
      <nav>
        <v-btn color="primary"><RouterLink to="/">Home</RouterLink></v-btn>
        <v-btn color="primary"><RouterLink to="/contact">Contact</RouterLink></v-btn>
        <v-btn color="primary"><RouterLink to="/detail">Detail</RouterLink></v-btn>
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
    </template>
    <style>
    
    
    nav {
      background-color: white;
      color: #fff;
      font-weight: 700;
    }
    
    nav a {
      text-decoration: none;
      color: white;
      font-size: 18px;
    }
    </style>
    