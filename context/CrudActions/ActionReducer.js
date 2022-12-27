export default function change(state, action) {
    // dato actual, tipo de acción
    const {payload, type} = action

    switch (type) {
        case 'changeDelAlert':
            return {
                ...state,
                delAlert: payload
            }

        case 'changeFormAlert':
            return {
                ...state,
                formAlert: payload
            }

        case 'changeSecAlert':
            return {
                ...state,
                secAlert : payload
            }
        case 'changeActionAPI':
            return {
                ...state,
                actionAPI: payload
            }
        default:
            break;
    }
}