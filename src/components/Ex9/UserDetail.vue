<template>
    <v-container>
      <v-card v-if="user">
        <v-card-title>Thông tin chi tiết của {{ user.name }}</v-card-title>
        <v-card-subtitle>Email: {{ user.email }}</v-card-subtitle>
        <v-card-text>Địa chỉ: {{ user.address }}</v-card-text>
      </v-card>
      <v-alert v-else type="error">Người dùng không tồn tại.</v-alert>
    </v-container>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' }
  ]
  const route = useRoute()
  const user = computed(() => users.find(u => u.id === Number(route.params.id)))
  </script>
  