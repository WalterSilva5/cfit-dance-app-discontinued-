@echo off
python .\manage.py collectstatic
git add .
git commit -m %1 
@echo commit feito: %1
git push origin master
 
