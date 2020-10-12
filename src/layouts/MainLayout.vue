<template>
  <q-layout view="lHh LpR lFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Black Excellence
        </q-toolbar-title>

        <div>Powered by Quasar v{{ $q.version }}</div>
      </q-toolbar>
      <q-tabs>
        <q-route-tab name="home" icon="home" label="Home" to="home" />
        <q-route-tab
          name="categories"
          icon="category"
          to="categories"
          label="Categories"
        />
        <q-route-tab
          name="about"
          icon="emoji_people"
          to="about"
          label="About"
        />
        <q-route-tab
          name="contact"
          icon="contact_page"
          to="contact"
          label="Contact Us"
        />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above elevated>
      <!-- content-class="bg-grey-1" -->
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev"
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      tab: null,
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
