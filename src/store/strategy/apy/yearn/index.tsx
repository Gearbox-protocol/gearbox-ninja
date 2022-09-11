import {
  getYearnAPY as getYearnAPYSdk,
  objectEntries,
  PERCENTAGE_DECIMALS,
  toSignificant,
  WAD_DECIMALS_POW,
  YearnAPYResult
} from '@gearbox-protocol/sdk'

export type YearnApy = Record<keyof YearnAPYResult, number>

export async function getYearnAPY(): Promise<YearnApy> {
  const yearn = await getYearnAPYSdk()

  const yearnMap = objectEntries(yearn).reduce<YearnApy>(
    (acc, [yearnSymbol, apy]) => {
      const apyInPercent = apy.mul(PERCENTAGE_DECIMALS)
      acc[yearnSymbol] = Number(toSignificant(apyInPercent, WAD_DECIMALS_POW))
      return acc
    },
    {} as YearnApy
  )

  return yearnMap
}
