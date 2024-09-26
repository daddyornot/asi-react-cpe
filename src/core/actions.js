
export const updateSelectedRobot = (robot) => {
    return {
        type: 'UPDATE_SELECTED_ROBOT',
        payload: robot
    }
}

export const addRobots = (robots) => {
    return {
        type: 'ADD_ROBOTS',
        payload: robots
    }
}

export const addParts = (parts) => {
    return {
        type: 'ADD_PARTS',
        payload: parts
    }
}

export const updateSelectedPart = (part) => {
    return {
        type: 'UPDATE_SELECTED_PART',
        payload: part
    }
}

export const resetSelectedRobot = () => {
    return {
        type: 'UPDATE_SELECTED_ROBOT',
        payload: null
    }
}

export const resetSelectedPart = () => {
    return {
        type: 'UPDATE_SELECTED_PART',
        payload: null
    }
}