---
layout: post
title: CS50 코칭스터디 5주차 메모리
author: 쓰는중
tags: [CS50, TIL, note]
excerpt_separator: <!--more-->
---

<h3>메모리, 그리고 16진법과 포인터를 배웠다.</h3>
 <!--more-->


16진법(hex): 1~9, A(10), B(11), C(12), D(13), E(14), F(15) 식으로 셀 수 있음 0x는 16진법 수를 의미  
ex: 255 = 2진법 1111 1111 → f f → 0xff /  216 = 2진법 1101 1000 → d 8 → 0xd8 / 

rgb의 FF는 16진법을 의미(FF0000) = (255 00 00)

컴퓨터의 메모리는 16진법으로 저장되어 있음.  
포인터: 컴퓨터의 메모리를 가르키는 용어. %p  

&: C언어에서 변수의 메모리상 주소를 받는 연산자. &n은 n의 주소.  
*: C언어에서 변수의 메모리상 주소로 이동하는 연산자. &와 반대의 의미  

int *p = &n 포인터 p에 n의 주소를 저장하는 것. 만약 int p = &n 이라 한다면 주소를 저장하는 것이기 때문에 컴파일 에러가 뜨게 된다.

사실 string이라는 문자열은 없다. 사실 문자열은 포인터이다. string은 cs50에만 있는 보조바퀴같은 역할이다.  
string s = "EMMA"; 는 char *s = "EMMA"라는 포인터로 나타낼 수 있다.  
EMMA는 E, M, M, A 그리고 중단문자 null로 이루어진 문자의 연속이고, char *는 이 문자를 가르키는 문자열의 첫번째 위치를 말한다.
따라서 string은 char *의 위치를 나타내는 포인터일 뿐이다.

string s = get_string("s: "); 와 string t = get_string("t: ");를 통해 생긴 s와 t는 같지 않다. s !== t
그 이유는 앞서 말했듯이 string은 사실 '포인터' 이고, 포인터는 화살표와 같은 의미로 '위치'를 알려주는 것이기 때문에 s와 t의 값은 같지 않다.
```C
char *s = "EMMA";
printf("%c\n", *(s+1)); = printf("%c\n", s[1]); s의 2번째 글자인 M 출력

// 메모리 할당 함수 malloc 를 이용한 문자열 복사방법. malloc는 정해진 크기만큼 메모리를 할당하는  함수
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    char *s = get_string("s: ");
    char *t = malloc(strlen(s) + 1); // +1을 더하는 이유는 널 종단문자(\0)를 복사하기 위해서이다.

    for (int i = 0, n = strlen(s); i < n + 1; i++)
    {
        t[i] = s[i];
    }

    t[0] = toupper(t[0]);

    printf("s: %s\n", s);
    printf("t: %s\n", t);
}
```
free: malloc의 반대. 메모리를 해제하는 함수. 사용하지 않는 함수의 메모리는 해제해야 한다.  
valgrind : C언어에서 메모리 누수와 버퍼 오버플로우(정의되지 않은 메모리에 접근하는 것)를 찾아주는 도구

메모리에 저장할 때 용도별로 할당된 저장공간이 있다.  
 machine code, globals, heap(melloc이 메모리를 할당하는 곳), stack(함수가 호출될 때 지역변수가 쌓이는 공간)