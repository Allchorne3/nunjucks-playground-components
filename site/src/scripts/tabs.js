const setupTabs = () => {
	const tabby = document.querySelector('.tabby')
	const tabs = document.querySelectorAll('.tabs a')
	const tabList = document.querySelector('.tabs')
	const tabContents = document.querySelectorAll('.tab-content')

	if(!tabby) {
		console.warn("No tab container can be found")
		return
	}
	
	tabList.addEventListener('click', e => {
		e.preventDefault()
		
		const tab = e.target
		const target = tab.dataset.target
		const tabContent = tabby.querySelector(`#${target}`)
		
		tabs.forEach(t => {
			t.classList.remove('is-selected')
		})
	
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('is-selected')
		})
	
		tab.classList.add('is-selected')
		tabContent.classList.add('is-selected')
	})
}

export default {
	setupTabs
}

// Add to main JS file
// import Tabs from './tabs';
// Tabs.setupTabs()

