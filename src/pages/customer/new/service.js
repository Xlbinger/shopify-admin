import axios from '@/utils/request';

export async function createCustomer(params) {
  return await axios(`https://mirror.viralbox.org/xulb/admin/api/2019-10/customers.json`,
  {
    method: 'POST',
    data:{...params}
  }
  );} 