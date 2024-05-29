import getYearsOfExperience from '@/helpers/get-years-of-experience'
import { createContext, useContext, useMemo } from 'react'

// #region Types
interface YearsOfExperienceProviderProps {
  children: JSX.Element
}

interface IYearsOfExperienceContextState {
  years: number
}
// #endregion

// #region Contexts
export const YearsOfExperienceContext = createContext(
  {} as IYearsOfExperienceContextState,
)
// #endregion

// #region Hooks
export function useYearsOfExperience() {
  return useContext(YearsOfExperienceContext)
}
// #endregion

export function YearsOfExperienceProvider({
  children,
}: Readonly<YearsOfExperienceProviderProps>) {
  const initialState: IYearsOfExperienceContextState = useMemo(
    () => ({
      years: getYearsOfExperience(),
    }),
    [],
  )

  return (
    <YearsOfExperienceContext.Provider value={initialState}>
      {children}
    </YearsOfExperienceContext.Provider>
  )
}
