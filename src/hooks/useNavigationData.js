import { useState } from 'react';

export default function useNavigationData() {
  const { get, set } = window.electronAPI.store();
  const navData = get('navigation') || [];

  const [data, updateData] = useState(navData);

  function setData(navigation = []) {
    const updateLocalData = set('navigation', navigation);

    if (updateLocalData) {
      updateData(navigation);
    }
  }

  return [data, setData];
}
