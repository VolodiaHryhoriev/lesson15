$(function() {
    let s1 = $('#s1').html();
    let s2 = $('.s2').html();
    let i = $('#second i').html();
    let q = $('q[title="hello"]').html();
    let a = $('a[target="_blank"]').html();
    let span = $('#second .extra').html();
    alert(s1 + s2 + i + q + a + span);
})