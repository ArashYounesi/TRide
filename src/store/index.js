import {reactive, ref} from 'vue'

export const states = {
    WHERE_TO_GO: 'where_to_go',
    PICK_UP: 'pick_up',
    PICK_OFF: 'pick_off',
    CHOOSE_TRIP: 'choose_trip',
    ARRIVING: 'arriving'
}
export const state = ref(states.ARRIVING)

export function useState() {
    const setState = (newState) => {
        state.value = newState
    }

    return {setState}
}

export const source = reactive({
    place_name: '',
    coordinates: [],
    marker: {}
})
export const destination = reactive({
    place_name: '',
    coordinates: [],
    marker: {}
})

export function useTrip() {
    const __init_source = () => {
        source.marker.remove()
        setSource({place_name: '', coordinates: [], marker: {}})
    }
    const __init_destination = () => {
        destination.marker.remove()
        setDestination({place_name: '', coordinates: [], marker: {}})
    }

    const setSource = (val) => {
        source.place_name = val.place_name
        source.coordinates = val.coordinates
    }
    const setSourceMarker = (val) => {
        source.marker = val
    }
    const setDestination = (val) => {
        destination.place_name = val.place_name
        destination.coordinates = val.coordinates
    }
    const setDestinationMarker = (val) => {
        destination.marker = val
    }

    return {__init_source, __init_destination, setSource, setDestination, setSourceMarker, setDestinationMarker}
}

export const cars = reactive([
    {coordinates: [55.2695055, 25.1972018]},
    {coordinates: [55.3695055, 25.1872018]}
])

export function useCars() {
    const setCars = (cars) => {
        cars.values = cars
    }

    return {setCars}
}

export const map = ref(null)

export function useMap() {
    const setMap = (val) => {
        map.value = val
    }

    return {setMap}
}
