<template>
    <nav class="bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                Sidebar
                <li class="nav-item"><router-link to="/">Tracker</router-link></li>
                <li class="nav-item"><router-link to="addItem">Add Item</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: "sidebar"
};
</script>
