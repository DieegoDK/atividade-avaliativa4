<template>
  <div class="about">
    <b-card style="text-align: center">
      <h1>About Us</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore error, tenetur facere officiis labore sint quisquam reiciendis deleniti modi recusandae dolorem totam, possimus libero rerum nostrum minima pariatur voluptate?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi placeat odio, quam et eius labore a laudantium consequatur laboriosam dolorum harum officia quidem numquam cum deleniti soluta tempora beatae.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis commodi fugiat vel recusandae consectetur exercitationem similique nemo, rerum, rem repellat. Sed quisquam eaque omnis obcaecati dignissimos facere et laborum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore perspiciatis magni? Nulla ab ipsa iusto error eos fuga necessitatibus voluptatem, eligendi tempore tempora pariatur! Soluta reprehenderit ipsa aliquam suscipit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat deleniti nemo quidem quia ipsa soluta accusamus qui, dolor aperiam molestiae, doloremque sint porro recusandae provident labore necessitatibus eveniet ex.</p>
      <span class="logo fas fa-gamepad fa-7x"><img src="#" alt="" /></span>    
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
    carrinho: 'carrinho'
    })
  },
}
</script>


