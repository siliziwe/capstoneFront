<template>
    <div class="container">
<div class="navigation">
  <ul class="list">
    <li class="list-item" style="--color:#1BC23E"><router-link to="/cart">
        <span class="icon">
          <i class="bi bi-bag-heart"></i>
        </span>
        <span class="text">My Cart</span>
        </router-link></li>
        </ul>
        </div>
        </div>
</template>

<script>

</script>

<style scoped>
.navigation ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.navigation ul li {
  list-style: none;
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  z-index: 0;
}

.navigation ul li.active {
  transform: translateX(30px);
}

.navigation.open ul li.active {
  transform: translateX(10px);
}

.navigation ul li a {
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 55px;
  height: 50px;
  line-height: 60px;
  color: #fff;
  border-radius: 10px;
  font-size: 1.75em;
  transition: 0.5s;
}

.navigation ul li.active a .icon {
  color: #fff;
  background: var(--color);
}

.navigation ul li.active a .icon::before {
  opacity: 0.5;
}

.navigation ul li a .text {
  position: relative;
  display: flex;
  align-items: flex-end;
  color: #333;
  transition: 0.5s;
}

.navigation.open ul li a .text {
  opacity: 1;
  visibility: visible;
}

.navigation ul li.active a .text {
  color: var(--color);
}
</style>