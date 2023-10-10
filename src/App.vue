<script>
import Map from './components/Map.vue'
import {_tgWebApp} from "@/helpers/helper";
import {state, states, useState, useTrip} from "@/store";

export default {
  components: {
    Map
  },

  data: () => ({
    location: {
      lng: 55.2695055,
      lat: 25.1972018,
      bearing: 0,
      pitch: 0,
      zoom: 13
    }
  }),
  mounted: () => {
    const tgWebApp = _tgWebApp()
    if (tgWebApp) {
      tgWebApp.enableClosingConfirmation()

      tgWebApp.BackButton.onClick(function () {
        history.back()
        const {setState} = useState()
        const {__init_source, __init_destination} = useTrip()

        switch (state.value) {
          case states.PICK_UP:
            setState(states.WHERE_TO_GO)
            break
          case states.PICK_OFF:
            setState(states.PICK_UP)
            __init_source()
            break
          case states.CHOOSE_TRIP:
            setState(states.PICK_OFF)
            __init_destination()
            break
          case states.ARRIVING:
            setState(states.CHOOSE_TRIP)
        }
      })
    }
  }
}
</script>

<template>
  <Map v-model="location"/>
  <main class="z-10 w-full h-fit">
    <RouterView/>
  </main>
</template>
