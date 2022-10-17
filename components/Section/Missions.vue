<template>
  <article class="Section Missions">
    <p class="Section_pretitle">
      play to earn
    </p>
    <h1 class="Section_title">
      Because Games are boring without Web3
    </h1>
    <p class="Section_description">
      Games have always been in the first flight of adoption to almost every significant computing technology shift — from early desktops to the internet and smartphones.
    </p>
    <div class="Missions_box -white">
      <p>
        With 0g there is no need
      </p>
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <p>{{ item.num }}</p>
          <p>
            {{ item.title }}
          </p>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          num: '01',
          title: 'to build in-game marketplaces',
        },
        {
          num: '02',
          title: 'to use Solidity to grant items ownership and verify TXs',
        },
        {
          num: '03',
          title: 'to wait for listings or verifications on centralized exchanges',
        },
        {
          num: '04',
          title: 'to build pre-sale mechanisms',
        },
        {
          num: '05',
          title: 'to pay for gas fees for players',
        },
      ]
    }
  }
};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Missions {
  &_box {
    box-shadow: 0 16px 32px rgba(47, 30, 115, 0.2);
    border-radius: 48px;
    padding: 50px;
    position: relative;

    &.-white {
      background-color: var(--color-white);
    }

    &.-column {
      display: flex;
      flex-direction: column;
      gap: 40px;

      @include for-tablet-up {
        top: 0;
        right: 0;
        bottom: auto;
        left: auto;
        max-width: 340px;
        padding: 20px;
        position: absolute;
      }

      @include for-desktop-up {
        width: 513px;
        bottom: -116px;
        left: -223px;
      }
    }
  }
}
</style>
