<script>
  import Nav from './Nav.svelte';
</script>

<style lang="scss">
  @import '../../styles/variables';
  @import '../../styles/mixins';

  .wrapper {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    display: block;
    width: 90%;
    max-width: 32rem;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch; 
  }
  img {
    display: block;
    width: 100%;
    pointer-events: none;
  }
  .inner-wrapper {
    flex-grow: 3;
    padding: 0 1%;
    overflow: hidden;
    background-image: url('/images/frame-sides.png');
    background-repeat: repeat-y; 
    background-position: center top;
    background-size: 100% auto;
    margin: -1px 0;
  }
  .container {
    width: 100%;
    background-color: var(--content-bg-color);
    height: calc(100% - var(--navbar-height));
    padding: 0 var(--container-padding);
    overflow: auto;
  }
  .hand {
    .left, .right {
      pointer-events: none;
      position: absolute;
      bottom: 0;
      line-height: 0;
      display: block;
      width: clamp(50%, 80vh, 125%);
      background-size: 100% auto;
      background-position: left bottom;
      background-repeat: no-repeat;
    }
    .left {
      z-index: 1;
      left: 0;
      transform: translate(-13.7%, 6%);
    }
    .right {
      z-index: -1;
      right: 0;
      transform: translate(28.5%, 11.5%);
    }
  }
</style>


<div class="wrapper">
  <img src="/images/frame-top.png" alt=""/>

  <div class="inner-wrapper">
    <main class="container">
      <slot></slot>
    </main>
    <Nav />
  </div>

  <img src="/images/frame-bottom.png" alt=""/>
  <div class="hand">
    <img class="left" src="/images/hand-left.png" alt="">
    <img class="right" src="/images/hand-right.png" alt="">
  </div>
</div>