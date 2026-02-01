// Search functionality for Malviya Community website

// Search index - contains all searchable content from the website
const searchIndex = [
    // History page
    {
        title: "Madan Mohan Malaviya - The Great Educator",
        url: "history.html",
        category: "History",
        content: "Madan Mohan Malaviya Bharat Ratna BHU Banaras Hindu University founder educator freedom fighter journalist Hindustan Times December 25 1861 November 12 1946",
        excerpt: "Madan Mohan Malaviya (1861-1946) was a great Indian educator, freedom fighter, and founder of Banaras Hindu University (BHU)."
    },
    {
        title: "Journalism & Media Legacy",
        url: "history.html#journalism",
        category: "History",
        content: "Hindustan Times newspaper Abhyudaya Leader Hindi Sahitya Sammelan journalism media press freedom",
        excerpt: "Malaviya's contributions to journalism include founding The Hindustan Times and promoting Hindi language newspapers."
    },
    {
        title: "Educational Institutions Founded",
        url: "history.html#education",
        category: "History",
        content: "BHU Banaras Hindu University Kashi Vidyapith MNIT MMMUT educational institutions founding",
        excerpt: "Malaviya founded several educational institutions including BHU, the largest residential university in Asia."
    },
    // Rajasthan page
    {
        title: "Rajasthan Malviyas",
        url: "rajasthan.html",
        category: "Rajasthan",
        content: "Rajasthan Jaipur Ajmer Jodhpur Udaipur Kota Bikaner Jat Malviya community",
        excerpt: "The Malviya community has a significant presence in Rajasthan, particularly in Jaipur and surrounding regions."
    },
    {
        title: "MNIT Jaipur",
        url: "rajasthan.html#mnit",
        category: "Education",
        content: "MNIT Malaviya National Institute of Technology Jaipur engineering college NIT",
        excerpt: "MNIT Jaipur is a premier engineering institution named after Madan Mohan Malaviya."
    },
    // Culture page
    {
        title: "Gotra & Kuldevi System",
        url: "culture.html#gotra",
        category: "Culture",
        content: "Gotra Kuldevi Kuldevta Kashyap Vashishtha Bharadwaj Gautam Katyayan Durga Kali Lakshmi Saraswati Bhadwa Mata",
        excerpt: "Learn about the gotra lineage system and family deities (Kuldevi/Kuldevta) in Malviya community."
    },
    {
        title: "Marriage & Wedding Traditions",
        url: "culture.html#marriage",
        category: "Culture",
        content: "Marriage wedding traditions customs rituals Ganesh Puja Haldi Mehendi Sangeet Baraat Varmala Kanyadaan Saptapadi Pheras",
        excerpt: "Traditional marriage customs and wedding ceremonies in the Malviya community."
    },
    {
        title: "Festivals & Celebrations",
        url: "culture.html#festivals",
        category: "Culture",
        content: "Malaviya Jayanti Diwali Holi Navratri Durga Puja festivals celebrations December 25",
        excerpt: "Major festivals celebrated by the Malviya community including Malaviya Jayanti on December 25."
    },
    // Community page
    {
        title: "Community Organizations",
        url: "community.html",
        category: "Community",
        content: "Malviya Samaj Sabha organizations community groups regional chapters",
        excerpt: "Various community organizations and regional chapters of Malviya Samaj across India."
    },
    {
        title: "Success Stories",
        url: "community.html#success",
        category: "Community",
        content: "Success stories achievements education business technology healthcare arts sports",
        excerpt: "Inspiring success stories of Malviya community members across various fields."
    },
    // Gallery page
    {
        title: "Photo Gallery",
        url: "gallery.html",
        category: "Gallery",
        content: "Photos images gallery BHU MNIT events festivals weddings cultural programs",
        excerpt: "Photo gallery featuring community events, festivals, weddings, and cultural programs."
    },
    // News page
    {
        title: "News & Updates",
        url: "news.html",
        category: "News",
        content: "News updates events announcements community activities celebrations",
        excerpt: "Latest news, updates, and announcements from the Malviya community."
    },
    {
        title: "Upcoming Events",
        url: "news.html#events",
        category: "Events",
        content: "Events calendar BHU Foundation Day Youth Meet Women's Day celebrations",
        excerpt: "Upcoming community events and celebrations."
    },
    // Occupations page
    {
        title: "Traditional Occupations",
        url: "occupations.html",
        category: "Occupations",
        content: "Occupations professions priesthood education business agriculture government service",
        excerpt: "Traditional and modern occupations of Malviya community members."
    },
    // Contact page
    {
        title: "Contact Us",
        url: "contact.html",
        category: "Contact",
        content: "Contact information email phone address community leaders regional chapters",
        excerpt: "Get in touch with Malviya community leaders and regional chapters."
    }
];

// Search function
function performSearch(query) {
    if (!query || query.trim().length < 2) {
        return [];
    }

    query = query.toLowerCase().trim();
    const keywords = query.split(' ').filter(word => word.length > 2);
    
    const results = searchIndex.map(item => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const contentLower = item.content.toLowerCase();
        
        // Exact title match gets highest score
        if (titleLower.includes(query)) {
            score += 100;
        }
        
        // Check each keyword
        keywords.forEach(keyword => {
            // Title matches are worth more
            if (titleLower.includes(keyword)) {
                score += 10;
            }
            // Content matches
            if (contentLower.includes(keyword)) {
                score += 5;
            }
            // Category matches
            if (item.category.toLowerCase().includes(keyword)) {
                score += 8;
            }
        });
        
        return { ...item, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
    
    return results;
}

// Display search results
function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');
    const searchStats = document.getElementById('searchStats');
    const resultCount = document.getElementById('resultCount');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
        noResults.style.display = 'block';
        searchStats.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    searchStats.style.display = 'block';
    resultsContainer.style.display = 'block';
    resultCount.textContent = results.length;
    
    resultsContainer.innerHTML = results.map(result => `
        <div class="search-result-card">
            <span class="result-category">${result.category}</span>
            <h3><a href="${result.url}">${result.title}</a></h3>
            <p>${result.excerpt}</p>
            <a href="${result.url}" class="result-link">
                Read more <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `).join('');
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchTags = document.querySelectorAll('.search-tag');
    
    // Search on button click
    searchButton.addEventListener('click', function() {
        const query = searchInput.value;
        const results = performSearch(query);
        displayResults(results);
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = searchInput.value;
            const results = performSearch(query);
            displayResults(results);
        }
    });
    
    // Popular search tags
    searchTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const query = this.getAttribute('data-query');
            searchInput.value = query;
            const results = performSearch(query);
            displayResults(results);
        });
    });
    
    // Check for search query in URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlQuery = urlParams.get('q');
    if (urlQuery) {
        searchInput.value = urlQuery;
        const results = performSearch(urlQuery);
        displayResults(results);
    }
});

