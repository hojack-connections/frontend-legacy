import * as types from '../actions/types';

const initialState = {
    isCreating: false,
    isUpdating: false,
    isDeleting: false,
    isFetching: false,
    error: '',
    createdEvent: {},
    event: {},
    events: [],
}

export default function event(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_EVENT.REQUEST:
            return {
                ...state,
                isCreating: true,
                error: '',
            }
        case types.CREATE_EVENT.SUCCESS:
            return {
                ...state,
                isCreating: false,
                createdEvent: action.response,
            }
        case types.CREATE_EVENT.FAILURE:
            return {
                ...state,
                isCreating: false,
                error: action.err,
            }
        case types.UPDATE_EVENT.REQUEST:
            return {
                ...state,
                isUpdating: true,
                error: '',
            }
        case types.UPDATE_EVENT.SUCCESS:
            return {
                ...state,
                isUpdating: false,
            }
        case types.UPDATE_EVENT.FAILURE:
            return {
                ...state,
                isUpdating: false,
                error: action.err,
            }
        case types.DELETE_EVENT.REQUEST:
            return {
                ...state,
                isDeleting: true,
                error: '',
            }
        case types.DELETE_EVENT.SUCCESS:
            return {
                ...state,
                isDeleting: false,
            }
        case types.DELETE_EVENT.FAILURE:
            return {
                ...state,
                isDeleting: false,
                error: action.err,
            }
        case types.GET_EVENT.REQUEST:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case types.GET_EVENT.SUCCESS:
            return {
                ...state,
                isFetching: false,
                event: action.response,
            }
        case types.GET_EVENT.FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.err,
            }
        case types.GET_EVENTS.REQUEST:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case types.GET_EVENTS.SUCCESS:
            return {
                ...state,
                isFetching: false,
                events: action.response,
            }
        case types.GET_EVENTS.FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.err,
            }
        default:
            return state;
    }
}
