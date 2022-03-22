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
    position: relative;
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
    height: calc(100% - var(--navbar-height));
    padding: 0 var(--container-padding);
    background-color: var(--content-bg-color);
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
  .tiny-eyes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 4.2% 9% 0;
    line-height: 0;
    text-align: right;
    white-space: nowrap;
    &:before, 
    &:after {
      content: '';
      display: inline-block;
      vertical-align: top;
      width: 1em;
      height: 1em;
      font-size: clamp(0.5rem, 2.5vw, 1rem);
      background: url('/images/tiny-eyes.png') top left no-repeat;
      background-size: 1em auto;
      animation: wink infinite 30s steps(1, end);
    }
    &:after {
      margin-left: 0.125em;
      animation-delay: 60ms;
    }
  }

  $stepSize: 8;
  @function randomNext($i) {
    @return random($stepSize) + ($i + random($stepSize) - 5);
  }
  $i: randomNext($stepSize);
  @keyframes wink {
    0%, 100% { background-position: 0 0; }
    @while $i < 99 {
      #{($i - 0.5) * 1%} { background-position: 0 0; }
      #{($i) * 1%} { background-position: 0 -1em; }
      #{($i + 0.5) * 1%} { background-position: 0 0; }
      $i: $i + randomNext($i);
    }
  }
</style>


<div class="wrapper">
  <div class="tiny-eyes"/>
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