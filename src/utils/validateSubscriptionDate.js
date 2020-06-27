import api from '../services/api';

export default async function validateSubscriptionDate(token){

  const dateS = await api.get(`/configs/date`, {
    headers:{
      authorization: token
    }
  })

  const today = new Date().setHours(0, 0, 0, 0)
  const initSubscriptionDate = new Date(dateS.data.init_subscription_date).setMilliseconds(10800000)
  const endSubscriptionDate = new Date(dateS.data.end_subscription_date).setMilliseconds(10800000)

  if (today >= initSubscriptionDate &&
      today <= endSubscriptionDate) {
    return true
  }

  return false
}