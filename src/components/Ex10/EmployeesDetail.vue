<template>
    <v-container>
      <v-card>
        <v-card-title>Chi tiết nhân viên: {{ employeeName }}</v-card-title>
        <v-card-subtitle>ID: {{ $route.params.id }}</v-card-subtitle>
      </v-card>
  
      <v-tabs v-model="tab" fixed-tabs>
        <v-tab to="profile">Thông tin cá nhân</v-tab>
        <v-tab to="projects">Dự án</v-tab>
        <v-tab to="contact">Liên hệ</v-tab>
      </v-tabs>
  
      <router-view />
    </v-container>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  const employeeName = computed(() => {
    const id = Number(route.params.id)
    const employees = [
      { id: 1, name: 'Nguyễn Văn A' },
      { id: 2, name: 'Nguyễn Văn B' },
      { id: 3, name: 'Nguyễn Văn C' }
    ]
    const employee = employees.find(e => e.id === id)
    return employee ? employee.name : 'Không tìm thấy nhân viên'
  })
  
  const tab = computed(() => route.path.split('/').pop())
  </script>
  