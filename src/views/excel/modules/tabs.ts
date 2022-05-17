import { ref } from 'vue'

import { ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

export interface Tab {
  id: string
  title: string
  content: any
  keys: any[]
}

export const useTabs = (addFc: () => void) => {
  const oldTab = JSON.parse(localStorage.getItem('DATA') || '[]')
  let tabIndex = ref<number>(Math.round(Math.random() * 1000000))
  const currentTab = ref('0')
  if (oldTab.length) {
    currentTab.value = oldTab[0].id
  }
  const tabs = ref<Tab[]>(oldTab)
  const addTab = (tab: Tab) => {
    tabs.value.push(tab)
    currentTab.value = tab.id
  }
  const delTab = (paneName: any) => {
    const oldTabs = tabs.value
    let activeName = currentTab.value
    if (activeName === paneName) {
      oldTabs.forEach((tab, index) => {
        if (tab.id === paneName) {
          const nextTab = oldTabs[index + 1] || oldTabs[index - 1]
          if (nextTab) {
            activeName = nextTab.id
          }
        }
      })
    }

    currentTab.value = activeName
    tabs.value = oldTabs.filter((tab) => tab.id !== paneName)

    localStorage.setItem('DATA', JSON.stringify(tabs.value))
  }

  const editTabs = (paneName: any, action: 'remove' | 'add'): any => {
    console.log(paneName, action)

    if (action === 'add') {
      addFc()
    } else if (action === 'remove') {
      ElMessageBox.alert('确认删除吗', '删除', {
        confirmButtonText: '删除',
        callback: (action: Action) => {
          if (action === 'confirm') {
            delTab(paneName)
          }
        },
      })
    }
  }

  return {
    tabIndex,
    currentTab,
    tabs,
    editTabs,
    addTab,
  }
}

export default useTabs
