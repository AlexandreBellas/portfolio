import { differenceInYears } from 'date-fns'

export default function getYearsOfExperience(): number {
  return differenceInYears(new Date(), new Date(2018, 5, 1))
}
