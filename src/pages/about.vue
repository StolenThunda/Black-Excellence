<template>
  <div class="q-pa-md">
    <q-splitter v-model="splitterModel" style="height: 80vh;">
      <q-tabs
        v-model="tab"
        dense
        vertical
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
      >
        <q-tab name="mission" label="Mission" />
        <q-tab name="vision" label="Vision" />
        <q-tab name="founder" label="Founder" />
      </q-tabs>


      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="founder">
          <div class="text-h6">Founder</div>
          <p>
            Bacon ipsum dolor amet brisket corned beef chicken, buffalo
            andouille venison frankfurter biltong meatball t-bone jowl boudin
            pastrami. Swine pork chop pancetta short ribs, buffalo kielbasa
            spare ribs pastrami. Meatball porchetta frankfurter meatloaf
            drumstick bresaola. Andouille cow meatloaf ham hock, frankfurter
            pork chop doner sausage.
          </p>
        </q-tab-panel>

        <q-tab-panel name="mission">
          <div class="text-h6">Mission</div>

          <p>
            Picanha tenderloin meatball venison. Andouille turducken beef ribs
            flank. Beef venison drumstick porchetta alcatra. Jowl sausage bacon
            meatball turducken. Pork belly brisket bacon, pancetta chislic
            meatball doner pork filet mignon ham ham hock shank pastrami.
            Burgdoggen sirloin porchetta spare ribs, beef tri-tip prosciutto
            doner landjaeger ground round pork loin.
          </p>
        </q-tab-panel>

        <q-tab-panel name="vision">
          <div class="text-h6">Vision</div>
          <p>
            Salami jowl ribeye tenderloin, rump short loin cow corned beef
            t-bone meatloaf burgdoggen beef ribs shoulder. Pork chop spare ribs
            corned beef meatball. Chicken short ribs pork, tri-tip brisket
            leberkas tenderloin pork belly prosciutto jerky. Hamburger alcatra
            ham hock short loin, sausage pork belly burgdoggen pork chop boudin.
          </p>
        </q-tab-panel>
      </q-tab-panels>
    </q-splitter>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    tab: "mission",
    splitterModel: 10
  })
};
</script>
