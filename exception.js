function exception_print()
{

	let hoge =1;

	try
	{
		alert(hage);		// 正しい変数に直してみる
	}
	catch(e)
	{
		alert("例外が検出されました");
		alert(e);
	}
	finally
	{
		// finally文は必ず実行されるので、
		// メモリ解放やファイル解放の処理などを書くと良い
		alert("例外が発生してもしなくても必ず実行される");
	}


}

function throw_exception()
{
	let array= ["One", "Two", "Three"];

	try
	{
		// javascriptでは定義していない配列へのアクセスはエラーにならない
		alert(array[3]);

		/*
		// 配列が空かどうかの判定
		if(array[3]  ==undefined)
		{
			throw "array overflow";		// メッセージと共に例外を投げる
		}
		*/

	}
	catch(e)
	{
		alert(e);
	}

}
