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

{/* <div class="tabby">
	<div class="tabs">
		<ul role="list">
			{% for tab in collections.champs %}
				<li>
					<a href="#{{ tab.data.title | kebab }}" data-target="{{ tab.data.title | kebab }}"{% if tab.data.order === 1 %} class="is-selected"{% endif %}>{{ tab.data.title }}
					</a>
				</li>
			{% endfor %}
		</ul>
	</div>

	<div class="tab-contents">
		{% for comparison in collections.champs %}
		<div class="tab-content{% if comparison.data.order === 1 %} is-selected{% endif %}" id="{{ comparison.data.title | kebab }}">
			<div class="tiles{% if comparison.data.vipTiers %} has-tiers{% endif %}">
				<div class="tile-title">
					<header>
						<figure class="image">
							<img src="./assets/images/logos/{{ comparison.data.title | kebab }}.png" alt="{{ comparison.data.title }}">
						</figure>
						<h3>{{ comparison.data.title }}</h3>
					</header>
					
					<h4>{{ comparison.data.description }}</h4>

					<div class="buttons">
						<a href="{{ comparison.data.referralLink }}" target="_blank" rel="noopener" class="button button-big button-primary">Sign up now</a>
					</div>
				</div>

				{% if comparison.data.vipTiers %}
				<div class="tile-vip-tiers">
					<h4>VIP Tiers</h4>
					<p>{{ comparison.data.vipDescription }}</p>

					<ol role="list">
						{% for vipTier in comparison.data.vipTiers %}
						<li>
							<p>
								<strong>VIP Tier {{ vipTier.tier }}:</strong> {{ vipTier.balance }}{% if vipTier.note %} <br /> <em>({{ vipTier.note }})</em>{% endif %}</p>
						</li>
						{% endfor %}
					</ol>
					
					<div class="buttons mobile-only">
						<a href="{{ comparison.data.referralLink }}" target="_blank" rel="noopener" class="button button-big button-primary">Sign up now</a>
					</div>
				</div>
				{% endif %}

				<div class="tile-info-small">
					<h4>Team Commissions and Referral Rewards:</h4>
					<p>{{ comparison.data.teamRewards }}</p>
					
					<div class="buttons mobile-only">
						<a href="{{ comparison.data.referralLink }}" target="_blank" rel="noopener" class="button button-big button-primary">Sign up now</a>
					</div>
				</div>

				<div class="tile-key-features">
					<h4>Key Features</h4>

					<div class="key-features">
						<ol role="list">
							{% for keyFeature in comparison.data.keyFeatures %}
							<li>
								<h5>{{ keyFeature.header }}</h5>
								<p>{{ keyFeature.feature }}</p>
							</li>
							{% endfor %}
						</ol>

						<div class="buttons mobile-only">
							<a href="{{ comparison.data.referralLink }}" target="_blank" rel="noopener" class="button button-big button-primary">Sign up now</a>
						</div>
					</div>
				</div>

				<div class="tile-links">
					<ul role="list">
						{% for social in comparison.data.socials %}
						<li>
							<h5>{{ social.title }}</h5>
							<a href="{{ social.link }}" target="_blank" rel="noopener" class="social-link">
								<i class="fa-brands fa-{{ social.brand | kebab}}"></i>
								<p>/{{ social.shortLink }}</p>
							</a>
						</li>
						{% endfor %}
					</ul>

					{% if comparison.data.website %}
					<h4>Official Website</h4>
					<a href="{{ comparison.data.website }}">{{ comparison.data.website }}</a>
					{% endif %}

					{% if comparison.data.resources %}
					<h4>Resources</h4>
					<ul role="list">
						{% for resource in comparison.data.resources %}
						<li>
							{# <h5>{{ resource.icon }}</h5> #}
							<a href="{{ resource.link }}" target="_blank" rel="noopener" class="resource-link">
								<i class="{{ resource.icon }}"></i>
								{{ resource.name }}
							</a>
						</li>
						{% endfor %}
					</ul>
					{% endif %}
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
</div> */}