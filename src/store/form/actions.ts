import actions from '../actions'
import { FormThunkAction } from './index'

export const toggleForm = (): FormThunkAction => async (dispatch, getState) => {
  const { isHidden } = getState().form
  if (isHidden) {
    //@ts-ignore
    document.getElementById('depositPage').style.visibility = 'visible'
  } else {
    //@ts-ignore
    document.getElementById('depositPage').style.visibility = 'hidden'
  }

  dispatch({ type: 'TOGGLE_FORM' })
}

export const populateForm =
  (symbol: string): FormThunkAction =>
  async (dispatch, getState) => {
    const { isHidden } = getState().form

    const title = 'Deposit ' + symbol.toUpperCase() + ' to Gearbox'
    const description = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
    risus facilisis, tempor metus tincidunt, interdum sem. Ut varius,
    tortor tincidunt fermentum scelerisque, urna augue tincidunt arcu,
    viverra rhoncus tortor erat nec eros.`

    document.getElementById('title').textContent = title
    document.getElementById('desc').textContent = description
    document.getElementById('submit').textContent = 'deposit ' + symbol

    dispatch({
      type: 'POPULATE_FORM',
      payload: {
        title,
        description,
        symbol
      }
    })
  }

export const updateForm =
  (input: number): FormThunkAction =>
  async (dispatch, getState) => {
    const { isHidden } = getState().form

    dispatch({
      type: 'UPDATE_FORM',
      payload: {
        value: input
      }
    })
  }
