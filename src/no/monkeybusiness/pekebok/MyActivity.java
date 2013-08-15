package no.monkeybusiness.pekebok;

import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class MyActivity extends DroidGap
{
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
