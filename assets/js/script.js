//Variables for accessing elements.

let countSpan = document.querySelector('.count span');
let flagImgDiv = document.querySelector('.flag-img');
let flagImg = document.querySelector('.flag-img img');
let flagOptions = document.querySelector('.flag-options ul');
let flagList = document.querySelectorAll('.flag-options ul li');

let currentIndex = 0;

//Array for questions and answers.

let flagQuestions = [
    {
        "img": "afghanistan.jpg",
        "options": [
            "finland", 
            "afghanistan", 
            "ghana"],
        "correct_answer": "afghanistan"
    },
    {
        "img": "bangladesh.jpg",
        "options": [
            "bangladesh", 
            "spain", 
            "angola"],
        "correct_answer": "bangladesh"
    },
    {
        "img": "cameroon.jpg",
        "options": [
            "greece", 
            "afghanistan", 
            "cameroon"],
        "correct_answer": "cameroon"
    },
    {
        "img": "dominica.jpg",
        "options": [
            "dominican republic", 
            "france", 
            "india"],
        "correct_answer": "dominican republic"
    },
    {
        "img": "egypt.jpg",
        "options": [
            "chile", 
            "egypt", 
            "germany"],
        "correct_answer": "egypt"
    },
    {
        "img": "france.jpg",
        "options": [
            "ukraine", 
            "france", 
            "nigeria"],
        "correct_answer": "france"
    },
    {
        "img": "ghana.jpg",
        "options": [
            "jamaica", 
            "afghanistan", 
            "ghana"],
        "correct_answer": "ghana"
    },
    {
        "img": "italy.jpg",
        "options": [
            "kenya", 
            "italy", 
            "albania"],
        "correct_answer": "italy"
    },
    {
        "img": "jamaica.jpg",
        "options": [
            "haiti", 
            "jamaica", 
            "senegal"],
        "correct_answer": "jamaica"
    },
    {
        "img": "kenya.jpg",
        "options": [
            "kenya", 
            "malaysia", 
            "canada"],
        "correct_answer": "kenya"
    },
    {
        "img": "liberia.jpg",
        "options": [
            "liberia", 
            "australia", 
            "mexico"],
        "correct_answer": "liberia"
    },
    {
        "img": "malaysia.jpg",
        "options": [
            "south africa", 
            "paraguay", 
            "malaysia"],
        "correct_answer": "malaysia"
    },
    {
        "img": "nigeria.jpg",
        "options": [
            "nigeria", 
            "saudi arabia", 
            "russia"],
        "correct_answer": "nigeria"
    },
    {
        "img": "portugal.jpg",
        "options": [
            "burkina faso", 
            "portugal", 
            "singapore"],
        "correct_answer": "portugal"
    },
    {
        "img": "qatar.jpg",
        "options": [
            "south korea", 
            "qatar", 
            "ghana"],
        "correct_answer": "qatar"
    },
    {
        "img": "russia.jpg",
        "options": [
            "philippines", 
            "united kingdom", 
            "russia"],
        "correct_answer": "russia"
    },
    {
        "img": "spain.jpg",
        "options": [
            "argentina", 
            "togo", 
            "spain"],
        "correct_answer": "spain"
    },
    {
        "img": "turkey.jpg",
        "options": [
            "norway", 
            "turkey", 
            "liberia"],
        "correct_answer": "turey"
    },
    {
        "img": "united_kingdom.jpg",
        "options": [
            "united states", 
            "united kingdom", 
            "united arab emirate"],
        "correct_answer": "united kingdom"
    },
    {
        "img": "venezuela.jpg",
        "options": [
            "venezuela", 
            "uganda", 
            "peru"],
        "correct_answer": "venezuela"
    },
    {
        "img":"zambia.jpg",
        "options": [
            "barbados", 
            "algeria", 
            "zambia"],
        "correct_answer": "zambia"
    },
    {
        "img": "argentina.jpg",
        "options": [
            "ecuador", 
            "argentina", 
            "china"],
        "correct_answer": "argentina"
    },
    {
        "img": "brazil.jpg",
        "options": [
            "indonesia", 
            "colombia", 
            "brazil"],
        "correct_answer": "brazil"
    },
    {
        "img": "canada.jpg",
        "options": [
            "japan", 
            "fiji", 
            "canada"],
        "correct_answer": "canada"
    },
    {
        "img": "ecuador.jpg",
        "options": [
            "ecuador", 
            "isreal", 
            "maldives"],
        "correct_answer": "ecuador"
    },
    {
        "img": "china.jpg",
        "options": [
            "poland", 
            "micronesia", 
            "china"],
        "correct_answer": "china"
    },
    {
        "img": "south_africa.jpg",
        "options": [
            "syria", 
            "south africa", 
            "thailand"],
        "correct_answer": "south africa"
    },
    {
        "img": "morocco.jpg",
        "options": [
            "morocco", 
            "panama", 
            "myanmar"],
        "correct_answer": "morocco"
    },
]