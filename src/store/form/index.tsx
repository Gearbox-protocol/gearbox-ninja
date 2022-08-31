import { PoolData } from '@gearbox-protocol/sdk'
import { BigNumber } from 'ethers'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../index'
import { Token } from './reducer'

export type FormActions =
  | {
      type: 'TOGGLE_FORM'
    }
  | {
      type: 'CLEAR_FORM'
    }
  | {
      type: 'MAX_AMOUNT'
      payload: {
        value: number
      }
    }
  | {
      type: 'POPULATE_FORM'
      payload: {
        title: string
        description: string
        symbol: string
        token: Token
        balance: BigNumber
        pool: PoolData
      }
    }
  | {
      type: 'UPDATE_FORM'
      payload: {
        value: number
      }
    }

export type FormThunkAction = ThunkAction<void, RootState, unknown, FormActions>