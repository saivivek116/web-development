#include<stdio.h>
#include<string.h>
main()
{
	char *s="vivek";
	char *v=s;
	char *p="i";
	int len=strlen(s);
	//printf("%d",len);
	char a[len];int i=0;
	while(*v!='\0')
	{
		
		if(*v!=*p){
			a[i++]=*v;
			// printf("%c", *v);
		}
		v++;
	}
	a[i]='\0';
	printf("%s",a);
	// printf("%c",*s);
	// while(*a!='\0')
	// {
	// 	printf("%c",*a );
	// }
}