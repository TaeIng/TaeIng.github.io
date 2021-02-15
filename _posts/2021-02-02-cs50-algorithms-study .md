---
layout: post
title: CS50 코칭스터디 4주차 알고리즘
author: 쓰는중
tags: [CS50, TIL, note]
excerpt_separator: <!--more-->
---

<h3>알고리즘, big-O, Omega(Ω), Theta(Θ)를 배웠다.</h3>
 <!--more-->

컴퓨터는 배열 속 내용물을 하나하나씩 봐야 함

big-O : 알고리즘을 수행하는 데 필요한 시간의 최악의경우, 상한선 ex) O(n) O(log n)  
Omega(Ω): 알고리즘을 수행하는 최상의 경우, 하한선 ex) 선형탐색: 운이 좋아 한번에 찾게 되었을때 - Ω(1)  
Theta(Θ): 어떤 알고리즘의 상한선과 하한선이 같은 경우. ex) 병합정렬 Θ(n log n)  

버블정렬 bubble sort: Repeat n-1 times (n명이 서로 비교하면서 최대 n-1번 자리교환) (n-1)(n-1)번 진행, O(n^2)  
                      선형탐색이나 이진탐색보다 시간이 더 많이듦  
                      하한선은 n-1, 즉 Ω(n)  

선택정렬 selection sort: 리스트 중 가장 작은 수를 찾아 선택하여 정렬하는 방식. n(n+1)/2, O(n^2)

병합정렬 merge sort:  왼쪽 정렬과 오른쪽 정렬을 병합하여 정렬하는 방식. Θ(n log n)  
병합: 두 배열 중 가장 작은 값을 꺼내 다른 배열의 가장 작은 값 다음에 두는 과정