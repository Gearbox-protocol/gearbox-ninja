import {
  Stage,
  game,
  input,
  state,
  event,
  ColorLayer,
  BitmapText
} from 'melonjs/dist/melonjs.module.js'

import { store } from '../../store'
import actions from '../../store/actions'

class Web3Screen extends Stage {
  /**
   *  action to perform on state change
   */
  onResetEvent() {
    // add a gray background to the default Stage
    game.world.addChild(new ColorLayer('background', '#202020'))

    // add a font text display object
    game.world.addChild(
      // @ts-ignore
      new BitmapText(game.viewport.width / 2, game.viewport.height / 2, {
        font: 'PressStart2P',
        size: 1.0,
        textBaseline: 'middle',
        textAlign: 'center',
        text: 'WIP Deposit Screen'
      })
    )

    game.world.addChild(
      // @ts-ignore
      new BitmapText(game.viewport.width / 2, game.viewport.height / 2 + 50, {
        font: 'PressStart2P',
        size: 0.5,
        textBaseline: 'middle',
        textAlign: 'center',
        text: '???'
      })
    )

    input.bindKey(input.KEY.ENTER, 'enter', true)

    event.once(event.KEYDOWN, function (action: string) {
      if (action === 'enter') {
        store.dispatch(actions.game.ChangeStage('PLAY'))
      }
    })
  }

  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent() {
    input.unbindKey(input.KEY.ENTER)
  }
}

export default Web3Screen
