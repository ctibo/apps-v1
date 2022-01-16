<script>
  
</script>

<style lang="scss">
  .wrapper {
    position: relative;
    margin: 0 auto;
    padding: var(--container-padding);
    display: block;
    width: 100%;
    max-width: 36rem;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
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
    background: rgb(224, 224, 224) url('/images/frame-sides.svg') repeat-y center top;
    background-size: 100% auto;
    margin: -1px 0;
  }
  .content {
    height: 100%;
    padding: var(--container-padding);
    overflow: auto;
  }
  
</style>


<div class="wrapper">
  <img src="/images/frame-top.svg" alt=""/>
  <div class="inner-wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
  <img src="/images/frame-bottom.svg" alt=""/>
</div>