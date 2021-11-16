from bs4 import BeautifulSoup
import requests 

#stores the values 
UrlDic = {}
propertyList = {
                "og:type":"time",
                "og:title":"title",
                "og:description":"description",
                "og:url":"url",
                "og:site_name":"site_name",
                "article:tag":"tag",
                "article:published_time":"publishedTime",
                "article:modified_time":"modifiedTime",
                "og:updated_time":"updateTime"
                }
nameList = {
            "description":"description",
            "author":"author",
            "news_keywords":"keywords",
            "lastModified":"modifiedTime"
          }

url = 'https://www.journaldemontreal.com/2021/11/16/le-mystere-sepaissit-autour-du-meurtre-dun-ado-de-16-ans-a-montreal'
url2 ='https://www.lapresse.ca/actualites/justice-et-faits-divers/2021-11-16/proces-avorte-de-l-ex-maire-de-terrebonne/le-dpcp-interjette-appel.php'

def extractData(url):

  # utiliser cette syntaxes pour aider a prendre multiple champ:https://stackoverflow.com/questions/2877114/parameters-for-find-function
  # case when not reachable 
  html_text= requests.get(url).text
  soup = BeautifulSoup(html_text,'lxml')
  
  # property list 
  for tag in propertyList: 
    valueExtracted = soup.find('meta',property=tag)
    
    if valueExtracted:
      UrlDic[propertyList[tag]]=valueExtracted["content"]  
    else:
      UrlDic[propertyList[tag]] = None
    


  # nameList 
  for tag in nameList: 
    valueExtracted= soup.find('meta', attrs={'name':tag}) # parceque name est utilisé deja par défaut
    if valueExtracted:
      UrlDic[nameList[tag]]= valueExtracted["content"]  
    else:
      UrlDic[nameList[tag]] = None
    
extractData(url2)
print(UrlDic)