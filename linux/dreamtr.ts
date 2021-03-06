<!DOCTYPE TS><TS>
<context>
    <name>AnalogDemDlg</name>
    <message>
        <source>S&amp;tations Dialog...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Sound Card Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;DRM (digital)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New &amp;AM Acquisition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click on the plot to set the demodulation frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> Hz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Carrier&lt;br&gt;Frequency:&lt;b&gt;&lt;br&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Noise Reduction:&lt;/b&gt; The noise suppression is a frequency domain optimal filter design based algorithm. The noise PSD is estimated utilizing a minimum statistic. A problem of this type of algorithm is that it produces the so called &quot;musical tones&quot;. The noise becomes colored and sounds a bit strange. At the same time, the useful signal (which might be speech or music) is also distorted by the algorithm. By selecting the level of noise reduction, a compromise between distortion of the useful signal and actual noise reduction can be made.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;AGC (Automatic Gain Control):&lt;/b&gt; Input signals can have a large variation in power due to channel impairments. To compensate for that, an automatic gain control can be applied. The AGC has four settings: Off, Slow, Medium and Fast.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Filter Bandwidth:&lt;/b&gt; A band-pass filter is applied before the actual demodulation process. With this filter, adjacent signals are attenuated. The bandwidth of this filter can be chosen in steps of 1 Hz by using the slider bar. Clicking on the right or left side of the slider leveler will increase/decrease the bandwidth by 1 kHz. &lt;br&gt;The current filter bandwidth is indicated in the spectrum plot by a selection bar.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Demodulation Type:&lt;/b&gt; The following analog demodulation types are available:&lt;ul&gt;&lt;li&gt;&lt;b&gt;AM:&lt;/b&gt; This analog demodulation type is used in most of the hardware radios. The envelope of the complex base-band signal is used followed by a high-pass filter to remove the DC offset. Additionally, a low pass filter with the same bandwidth as the pass-band filter is applied to reduce the noise caused by non-linear distortions.&lt;/li&gt;&lt;li&gt;&lt;b&gt;LSB / USB:&lt;/b&gt; These are single-side-band (SSB) demodulation types. Only one side of the spectrum is evaluated, the upper side band is used in USB and the lower side band with LSB. It is important for SSB demodulation that the DC frequency of the analog signal is known to get satisfactory results. The DC frequency is automatically estimated by starting a new acquisition or by clicking on the plot.&lt;/li&gt;&lt;li&gt;&lt;b&gt;CW:&lt;/b&gt; This demodulation type can be used to receive CW signals. Only a narrow frequency band in a fixed distance to the mixing frequency is used. By clicking on the spectrum plot, the center position of the band pass filter can be set.&lt;/li&gt;&lt;li&gt;&lt;b&gt;FM:&lt;/b&gt; This is a narrow band frequency demodulation.&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Mute Audio:&lt;/b&gt; The audio can be muted by checking this box. The reaction of checking or unchecking this box is delayed by approx. 1 second due to the audio buffers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Save Audio as WAV:&lt;/b&gt; Save the audio signal as stereo, 16-bit, 48 kHz sample rate PCM wave file. Checking this box will let the user choose a file name for the recording.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Carrier Frequency:&lt;/b&gt; The (estimated) carrier frequency of the analog signal is shown. (The estimation of this parameter can be done by the Autom Frequency Acquisition which uses the estimated PSD of the input signal and applies a maximum search.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;PLL:&lt;/b&gt; The Phase-Lock-Loop (PLL) tracks the carrier of the modulated received signal. The resulting phase offset between the reference oscillator and the received carrier is displayed in a dial control. If the pointer is almost steady, the PLL is locked. If the pointer of the dial control turns quickly, the PLL is out of lock. To get the PLL locked, the frequency offset to the true carrier frequency must not exceed a few Hz.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Auto Frequency Acquisition:&lt;/b&gt; Clicking on the input spectrum plot changes the mixing frequency for demodulation. If the Auto Frequency Acquisition is enabled, the largest peak near the curser is selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Live Schedule Dialog...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AnalogDemDlgBase</name>
    <message>
        <source>System Evaluation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Waterfall</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextFreqOffset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PLL
Phase Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Filter Bandwidth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextLabelBandWidth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Demodulation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>LSB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>USB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AGC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Slow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Med</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Noise Reduction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>High</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mute Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PLL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Auto Frequency Acquisition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;AMSS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;DRM</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CAMSSDlg</name>
    <message>
        <source></source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No AMSS detected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Awaiting AMSS data...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CAMSSDlgBase</name>
    <message>
        <source>AMSS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AMSS Decoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ServiceLabelAMSS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AMSSInfo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Block:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bits:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SDC:  </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>................</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AFS:  </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AMSS Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AMSSAMCarrierMode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AMSSServiceID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AMSSLanguage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AMSSCountryCode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AMSSTimeDate</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CAboutDlg</name>
    <message>
        <source>is a software implementation of a Digital Radio Mondiale (DRM) receiver. With Dream, DRM broadcasts can be received with a modified analog receiver (SW, MW, LW) and a PC with a sound card.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Although this software is going to be distributed as free software under the terms of the GPL this does not mean that its use is free of rights of others. The use may infringe third party IP and thus may not be legal in some countries.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This compilation of Dream uses the following libraries:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dream, Version </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open-Source Software Implementation of a DRM-Receiver</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Under the GNU General Public License (GPL)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CAboutDlgBase</name>
    <message>
        <source>About Dream</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextLabelVersion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextViewCredits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Volker Fischer, Alexander Kurpiers, Andrea Russo
Julian Cable, Andrew Murphy, Oliver Haffenden</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copyright (C) 2001 - 2007</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CDRMPlot</name>
    <message>
        <source>Channel Impulse Response</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time [ms]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>IR [dB]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guard-interval beginning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guard-interval end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Estimated begin of impulse response</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Estimated end of impulse response</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Higher Bound</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lower bound</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Channel Transfer Function / Group Delay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Carrier Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TF [dB]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group Delay [ms]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transf. Fct.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group Del.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Audio Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frequency [kHz]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rel. Frequency Offset / Sample Rate Offset History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time [s]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Rate Offset [Hz]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Freq.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Samp.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Freq. Offset [Hz] rel. to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delay / Doppler History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time [min]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delay [ms]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Doppler [Hz]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Doppler</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SNR / Correctly Decoded Audio History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SNR [dB]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Corr. Dec. Audio / DRM-Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shifted Power Spectral Density of Input Signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PSD [dB]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DC carrier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shifted PSD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SNR Spectrum (Weighted MER on MSC Cells)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>WMER [dB]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SNR Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input Spectrum [dB]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input PSD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input PSD [dB]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Filter bandwidth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>My Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Waterfall Input Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FAC Constellation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Real</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Imaginary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SDC Constellation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MSC Constellation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MSC / SDC / FAC Constellation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Impulse Response:&lt;/b&gt; This plot shows the estimated Impulse Response (IR) of the channel based on the channel estimation. It is the averaged, Hamming Window weighted Fourier back transformation of the transfer function. The length of PDS estimation and time synchronization tracking is based on this function. The two red dashed vertical lines show the beginning and the end of the guard-interval. The two black dashed vertical lines show the estimated beginning and end of the PDS of the channel (derived from the averaged impulse response estimation). If the &quot;First Peak&quot; timing tracking method is chosen, a bound for peak estimation (horizontal dashed red line) is shown. Only peaks above this bound are used for timing estimation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Transfer Function / Group Delay:&lt;/b&gt; This plot shows the squared magnitude and the group delay of the estimated channel at each sub-carrier.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;FAC, SDC, MSC:&lt;/b&gt; The plots show the constellations of the FAC, SDC and MSC logical channel of the DRM stream. Depending on the current transmitter settings, the SDC and MSC can have 4-QAM, 16-QAM or 64-QAM modulation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Shifted PSD:&lt;/b&gt; This plot shows the estimated Power Spectrum Density (PSD) of the input signal. The DC frequency (red dashed vertical line) is fixed at 6 kHz. If the frequency offset acquisition was successful, the rectangular DRM spectrum should show up with a center frequency of 6 kHz. This plot represents the frequency synchronized OFDM spectrum. If the frequency synchronization was successful, the useful signal really shows up only inside the actual DRM bandwidth since the side loops have in this case only energy between the samples in the frequency domain. On the sample positions outside the actual DRM spectrum, the DRM signal has zero crossings because of the orthogonality. Therefore this spectrum represents NOT the actual spectrum but the &quot;idealized&quot; OFDM spectrum.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;SNR Spectrum (Weighted MER on MSC Cells):&lt;/b&gt; This plot shows the Weighted MER on MSC cells for each carrier separately.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Input Spectrum:&lt;/b&gt; This plot shows the Fast Fourier Transformation (FFT) of the input signal. This plot is active in both modes, analog and digital. There is no averaging applied. The screen shot of the Evaluation Dialog shows the significant shape of a DRM signal (almost rectangular). The dashed vertical line shows the estimated DC frequency. This line is very important for the analog AM demodulation. Each time a new carrier frequency is acquired, the red line shows the selected AM spectrum. If more than one AM spectrums are within the sound card frequency range, the strongest signal is chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Input PSD:&lt;/b&gt; This plot shows the estimated power spectral density (PSD) of the input signal. The PSD is estimated by averaging some Hamming Window weighted Fourier transformed blocks of the input signal samples. The dashed vertical line shows the estimated DC frequency.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Audio Spectrum:&lt;/b&gt; This plot shows the averaged audio spectrum of the currently played audio. With this plot the actual audio bandwidth can easily determined. Since a linear scale is used for the frequency axis, most of the energy of the signal is usually concentrated on the far left side of the spectrum.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Frequency Offset / Sample Rate Offset History:&lt;/b&gt; The history of the values for frequency offset and sample rate offset estimation is shown. If the frequency offset drift is very small, this is an indication that the analog front end is of high quality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Doppler / Delay History:&lt;/b&gt; The history of the values for the Doppler and Impulse response length is shown. Large Doppler values might be responsable for audio drop-outs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;SNR History:&lt;/b&gt; The history of the values for the SNR and correctly decoded audio blocks is shown. The maximum achievable number of correctly decoded audio blocks per DRM frame is 10 or 5 depending on the audio sample rate (24 kHz or 12 kHz AAC core bandwidth).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Waterfall Display of Input Spectrum:&lt;/b&gt; The input spectrum is displayed as a waterfall type. The different colors represent different levels.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CDreamHelpMenu</name>
    <message>
        <source>What&apos;s &amp;This</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;About...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CEPGDlgbase</name>
    <message>
        <source>Programme Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Genre</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basic Profile Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advanced Profile Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EPG decoding is disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time [UTC]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CGeneralSettingsDlgBase</name>
    <message>
        <source>General settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Receiver coordinates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latitude   </source>
        <translation type="unfinished"></translation>
    </message>
    <message encoding="UTF-8">
        <source>??</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>N/S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Longitude</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E/W</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CLiveScheduleDlgBase</name>
    <message>
        <source>Live Schedule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextLabelUTCTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F&amp;reeze</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CMultSettingsDlgBase</name>
    <message>
        <source>Multimedia settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MOT Broadcast Web Site</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add refresh header of seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clear cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EPG - Electronic Programme Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CSoundCardSelMenu</name>
    <message>
        <source>Sound &amp;In</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sound &amp;Out</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CStationsDlgBase</name>
    <message>
        <source>Stations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextLabelUTCTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S-Meter [dB]
(relative to S9):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EPGDlg</name>
    <message>
        <source>no basic profile data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>no advanced profile data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>no data</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FDRMDialog</name>
    <message>
        <source>&amp;Evaluation Dialog...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>M&amp;ultimedia Dialog...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;tations Dialog...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Live Schedule Dialog...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Programme Guide...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Sound Card Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;AM (analog)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New &amp;DRM Acquisition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set D&amp;isplay Color...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Blue / White</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Green / Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>B&amp;lack / Grey</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Plot Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Live Schedule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Programme Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>System Evaluation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multimedia</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> kbps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Service</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> + EPG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> + MM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> + AFS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scanning...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Text Message:&lt;/b&gt; On the top right the text message label is shown. This label only appears when an actual text message is transmitted. If the current service does not transmit a text message, the label will be disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Input Level:&lt;/b&gt; The input level meter shows the relative input signal peak level in dB. If the level is too high, the meter turns from green to red. The red region should be avoided since overload causes distortions which degrade the reception performance. Too low levels should be avoided too, since in this case the Signal-to-Noise Ratio (SNR) degrades.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Status LEDs:&lt;/b&gt; The three status LEDs show the current CRC status of the three logical channels of a DRM stream. These LEDs are the same as the top LEDs on the Evaluation Dialog.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Station Label and Info Display:&lt;/b&gt; In the big label with the black background the station label and some other information about the current selected service is displayed. The magenta text on the top shows the bit-rate of the current selected service (The abbreviations EEP and UEP stand for Equal Error Protection and Unequal Error Protection. UEP is a feature of DRM for a graceful degradation of the decoded audio signal in case of a bad reception situation. UEP means that some parts of the audio is higher protected and some parts are lower protected (the ratio of higher protected part length to total length is shown in the brackets)), the audio compression format (e.g. AAC), if SBR is used and what audio mode is used (Mono, Stereo, P-Stereo -&gt; low-complexity or parametric stereo). In case SBR is used, the actual sample rate is twice the sample rate of the core AAC decoder. The next two types of information are the language and the program type of the service (e.g. German / News).&lt;br&gt;The big turquoise text in the middle is the station label. This label may appear later than the magenta text since this information is transmitted in a different logical channel of a DRM stream. On the right, the ID number connected with this service is shown.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Service Selectors:&lt;/b&gt; In a DRM stream up to four services can be carried. The service can be an audio service, a data service or an audio service with data. Audio services can have associated text messages, in addition to any data component. If a Multimedia data service is selected, the Multimedia Dialog will automatically show up. On the right of each service selection button a short description of the service is shown. If an audio service has associated Multimedia data, &quot;+ MM&quot; is added to this text. If such a service is selected, opening the Multimedia Dialog will allow the data to be viewed while the audio is still playing. If the data component of a service is not Multimedia, but an EPG (Electronic Programme Guide) &quot;+ EPG&quot; is added to the description. The accumulated Programme Guides for all stations can be viewed by opening the Programme Guide Dialog. The selected channel in the Programme Guide Dialog defaults to the station being received. If Alternative Frequency Signalling is available, &quot;+ AFS&quot; is added to the description. In this case the alternative frequencies can be viewed by opening the Live Schedule Dialog.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Multimedia settings...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multimedia settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;General settings...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General settings</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FDRMDialogBase</name>
    <message>
        <source>Dream</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Level [dB]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>15 kbps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AAC+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stereo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Deutsche Welle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1001</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextTextMessage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1</source>
        <comment>Selects the first service</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextMiniService1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2</source>
        <comment>Selects the second service</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextMiniService2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>3</source>
        <comment>Selects the third service</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextMiniService3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>4</source>
        <comment>Selects the fourth service</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextMiniService4</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GeneralSettingsDlg</name>
    <message>
        <source>Latitude value must be in the range 0 to 90</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Longitude value must be in the range 0 to 180</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minutes value must be in the range 0 to 59</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compile all fields on receiver coordinates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Receiver coordinates:&lt;/b&gt; Are used on Live Schedule Dialog to show a little green cube on the left of the target column if the receiver coordinates (latitude and longitude) are inside the target area of this transmission.&lt;br&gt;Receiver coordinates are also saved into the Log file.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LiveScheduleDlg</name>
    <message>
        <source>System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time [UTC]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;only active stations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;all stations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;5 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;15 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;30 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stations &amp;preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AFS Live Schedule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;UTC Time:&lt;/b&gt; Shows the current Coordinated Universal Time (UTC) which is also known as Greenwich Mean Time (GMT).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frequency [kHz/MHz]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Live Schedule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Freeze:&lt;/b&gt; If this check box is selectd the live schedule is freezed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Live Schedule List:&lt;/b&gt; In the live schedule list it&apos;s possible to view AFS (Alternative Frequency Signalling) informations trasmitted with the current DRM or AMSS signal.&lt;/b&gt;It is possible to show only active stations by changing a setting in the &apos;view&apos; menu.&lt;br&gt;The color of the cube on the left of the frequency shows the current status of the transmission.&lt;br&gt;A green box shows that the transmission takes place right now a red cube it is shown that the transmission is offline, a pink cube shown that the transmission soon will be offline.&lt;br&gt;If the stations preview is active an orange box shows the stations that will be active.&lt;br&gt;A little green cube on the left of the target column show that the receiver coordinates (latitude and longitude) stored into Dream settings are into the target area of this transmission.&lt;br&gt;The list can be sorted by clicking on the headline of the column.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultimediaDlg</name>
    <message>
        <source>C&amp;lear all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;all...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set &amp;Font...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MOT Broadcast Web Site</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The home page is available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image could not be loaded, </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-format not supported by this version of QT!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If you want to view the image, save it to file and use an external viewer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MOT Slideshow Viewer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No data service or data service not supported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The homepage is available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Press the button to open it in the default browser.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multimedia</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultimediaDlgBase</name>
    <message>
        <source>Dream Multimedia</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Receiving Status:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>0/0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Sun</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fri</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sat</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>irregular</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>daily</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>from Sun to Thu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>from Sun to Fri</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>from Mon to Fri</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>from Mon to Sat</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StationsDlg</name>
    <message>
        <source>Station Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time [UTC]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frequency [kHz]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Power [kW]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Country</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Site</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Days</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;only active stations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;all stations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;5 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;15 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;30 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stations &amp;preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable S-Meter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>With DRM Modification</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Get Update...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remote</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dream Schedule Update</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dream tries to download the newest DRM schedule
from www.drm-dx.de (powered by Klaus Schneider).
Your computer must be connected to the internet.

The current file DRMSchedule.ini will be overwritten.
Do you want to continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update failed. The following things may caused the failure:
<byte value="x9"/>- the internet connection was not set up properly
<byte value="x9"/>- the server www.drm-dx.de is currently not available
<byte value="x9"/>- the file &apos;DRMSchedule.ini&apos; could not be written</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update successful.
Due to network problems with the Windows version of QT, the Dream software must be restarted after a DRMSchedule update.
Please exit Dream now.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ok</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update successful.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Frequency Counter:&lt;/b&gt; The current frequency value can be changed by using this counter. The tuning steps are 100 kHz for the  buttons with three arrows, 10 kHz for the buttons with two arrows and 1 kHz for the buttons having only one arrow. By keeping the button pressed, the values are increased / decreased automatically.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;UTC Time:&lt;/b&gt; Shows the current Coordinated Universal Time (UTC) which is also known as Greenwich Mean Time (GMT).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Signal-Meter:&lt;/b&gt; Shows the signal strength level in dB relative to S9.&lt;br&gt;Note that not all front-ends controlled by hamlib support this feature. If the s-meter is not available, the controls are disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> (last update: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Get Update</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Stations List:&lt;/b&gt; In the stations list view all DRM stations which are stored in the DRMSchedule.ini file are shown. It is possible to show only active stations by changing a setting in the &apos;view&apos; menu. The color of the cube on the left of a menu item shows the current status of the DRM transmission. A green box shows that the transmission takes place right now, a yellow cube shows that this is a test transmission and with a red cube it is shown that the transmission is offline, a pink cube shown that the transmission soon will be offline.&lt;br&gt;If the stations preview is active an orange box shows the stations that will be active.&lt;br&gt;The list can be sorted by clicking on the headline of the column.&lt;br&gt;By clicking on a menu item, a remote front-end can be automatically switched to the current frequency and the Dream software is reset to a new acquisition (to speed up the synchronization process). Also, the log-file frequency edit is automatically updated.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TransmDialog</name>
    <message>
        <source>new</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2 s (Long Interleaving)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>400 ms (Short Interleaving)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SM 16-QAM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SM 64-QAM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>4-QAM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>16-QAM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dream DRM Transmitter<byte value="xb"/>
This is a test transmission</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Sound Card Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Stop</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Files (*.png *.jpg *.jpeg *.jfif)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Dream Logo:&lt;/b&gt; This is the official logo of the Dream software.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Input Level:&lt;/b&gt; The input level meter shows the relative input signal peak level in dB. If the level is too high, the meter turns from green to red.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;DRM Robustness Mode:&lt;/b&gt; In a DRM system, four possible robustness modes are defined to adapt the system to different channel conditions. According to the DRM standard:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Mode A:&lt;/i&gt; Gaussian channels, with minor fading&lt;/li&gt;&lt;li&gt;&lt;i&gt;Mode B:&lt;/i&gt; Time and frequency selective channels, with longer delay spread&lt;/li&gt;&lt;li&gt;&lt;i&gt;Mode C:&lt;/i&gt; As robustness mode B, but with higher Doppler spread&lt;/li&gt;&lt;li&gt;&lt;i&gt;Mode D:&lt;/i&gt; As robustness mode B, but with severe delay and Doppler spread&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;DRM Bandwidth:&lt;/b&gt; The bandwith is the gross bandwidth of the generated DRM signal. Not all DRM robustness mode / bandwidth constellations are possible, e.g., DRM robustness mode D and C are only defined for the bandwidths 10 kHz and 20 kHz.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Output intermediate frequency of DRM signal:&lt;/b&gt; Set the output intermediate frequency (IF) of generated DRM signal in the &apos;sound-card pass-band&apos;. In some DRM modes, the IF is located at the edge of the DRM signal, in other modes it is centered. The IF should be chosen that the DRM signal lies entirely inside the sound-card bandwidth.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Output format:&lt;/b&gt; Since the sound-card outputs signals in stereo format, it is possible to output the DRM signal in three formats:&lt;ul&gt;&lt;li&gt;&lt;b&gt;real valued&lt;/b&gt; output on both, left and right, sound-card channels&lt;/li&gt;&lt;li&gt;&lt;b&gt;I / Q&lt;/b&gt; output which is the in-phase and quadrature component of the complex base-band signal at the desired IF. In-phase is output on the left channel and quadrature on the right channel.&lt;/li&gt;&lt;li&gt;&lt;b&gt;E / P&lt;/b&gt; output which is the envelope and phase on separate channels. This output type cannot be used if the Dream transmitter is regularly compiled with a sound-card sample rate of 48 kHz since the spectrum of these components exceed the bandwidth of 20 kHz.&lt;br&gt;The envelope signal is output on the left channel and the phase is output on the right channel.&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;MSC interleaver mode:&lt;/b&gt; The symbol interleaver depth can be either short (approx. 400 ms) or long (approx. 2 s). The longer the interleaver the better the channel decoder can correct errors from slow fading signals. But the longer the interleaver length the longer the delay until (after a re-synchronization) audio can be heard.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dream DRM Transmitter</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TransmDlgBase</name>
    <message>
        <source>Dream DRM Transmitter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Volker Fischer, Alexander Kurpiers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Darmstadt University of Technology
Institute for Communication Technology</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Audio Level [dB]:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextLabelCurPict</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Channel Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Robustness Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bandwidth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>4,5 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>9 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>18 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>5 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>10 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>20 kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MSC Constellation Scheme:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MSC Protection Level:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SDC Constellation Scheme:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MSC Interleaver Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>IF:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> Hz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Real val.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I / Q (pos)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I / Q (neg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E / P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Service 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Label:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Service ID:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Program Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Clear All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add / Modify</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Data (SlideShow Application)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Service 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Service 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Service 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>systemevalDlg</name>
    <message>
        <source>MLC: Number of Iterations: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Constellation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Channel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SNR Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Audio Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shifted PSD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Waterfall Input Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input PSD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MSC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SDC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FAC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FAC / SDC / MSC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frequency / Sample Rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delay / Doppler</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SNR / Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transfer Function</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Impulse Response</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ListView context menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open in separate window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chart Window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Metrics [dB]: MSC: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2 s (Long Interleaving)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>400 ms (Short Interleaving)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Interleaver Depth:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SDC / MSC Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prot. Level (B / A):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Audio: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> / Data: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of Services:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Service not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Received time - date:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DreamOut.wav</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Label            </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
Bitrate          </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
Mode             </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
Bandwidth        </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;DC Frequency Offset:&lt;/b&gt; This is the estimation of the DC frequency offset. This offset corresponds to the resulting sound card intermedia frequency of the front-end. This frequency is not restricted to a certain value. The only restriction is that the DRM spectrum must be completely inside the bandwidth of the sound card.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Sample Frequency Offset:&lt;/b&gt; This is the estimation of the sample rate offset between the sound card sample rate of the local computer and the sample rate of the D / A (digital to analog) converter in the transmitter. Usually the sample rate offset is very constant for a given sound card. Therefore it is useful to inform the Dream software about this value at application startup to increase the acquisition speed and reliability.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Doppler / Delay:&lt;/b&gt; The Doppler frequency of the channel is estimated for the Wiener filter design of channel estimation in time direction. If linear interpolation is set for channel estimation in time direction, this estimation is not updated. The Doppler frequency is an indication of how fast the channel varies with time. The higher the frequency, the faster the channel changes are.&lt;br&gt;The total delay of the Power Delay Spectrum (PDS) is estimated from the impulse response estimation derived from the channel estimation. This delay corresponds to the range between the two vertical dashed black lines in the Impulse Response (IR) plot.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;I / O Interface LED:&lt;/b&gt; This LED shows the current status of the sound card interface. The yellow light shows that the audio output was corrected. Since the sample rate of the transmitter and local computer are different, from time to time the audio buffers will overflow or under run and a correction is necessary. When a correction occurs, a &quot;click&quot; sound can be heard. The red light shows that a buffer was lost in the sound card input stream. This can happen if a thread with a higher priority is at 100% and the Dream software cannot read the provided blocks fast enough. In this case, the Dream software will instantly loose the synchronization and has to re-synchronize. Another reason for red light is that the processor is too slow for running the Dream software.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Time Sync Acq LED:&lt;/b&gt; This LED shows the state of the timing acquisition (search for the beginning of an OFDM symbol). If the acquisition is done, this LED will stay green.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Frame Sync LED:&lt;/b&gt; The DRM frame synchronization status is shown with this LED. This LED is also only active during acquisition state of the Dream receiver. In tracking mode, this LED is always green.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;FAC CRC LED:&lt;/b&gt; This LED shows the Cyclic Redundancy Check (CRC) of the Fast Access Channel (FAC) of DRM. FAC is one of the three logical channels and is always modulated with a 4-QAM. If the FAC CRC check was successful, the receiver changes to tracking mode. The FAC LED is the indication whether the receiver is synchronized to a DRM transmission or not.&lt;br&gt;The bandwidth of the DRM signal, the constellation scheme of MSC and SDC channels and the interleaver depth are some of the parameters which are provided by the FAC.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;SDC CRC LED:&lt;/b&gt; This LED shows the CRC check result of the Service Description Channel (SDC) which is one logical channel of the DRM stream. This data is transmitted in approx. 1 second intervals and contains information about station label, audio and data format, etc. The error protection is normally lower than the protection of the FAC. Therefore this LED will turn to red earlier than the FAC LED in general.&lt;br&gt;If the CRC check is ok but errors in the content were detected, the LED turns yellow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;MSC CRC LED:&lt;/b&gt; This LED shows the status of the Main Service Channel (MSC). This channel contains the actual audio and data bits. The LED shows the CRC check of the AAC core decoder. The SBR has a separate CRC, but this status is not shown with this LED. If SBR CRC is wrong but the AAC CRC is ok one can still hear something (of course, the high frequencies are not there in this case). If this LED turns red, interruptions of the audio are heard. The yellow light shows that only one 40 ms audio frame CRC was wrong. This causes usually no hearable artifacts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;MLC, Number of Iterations:&lt;/b&gt; In DRM, a multilevel channel coder is used. With this code it is possible to iterate the decoding process in the decoder to improve the decoding result. The more iterations are used the better the result will be. But switching to more iterations will increase the CPU load. Simulations showed that the first iteration (number of iterations = 1) gives the most improvement (approx. 1.5 dB at a BER of 10-4 on a Gaussian channel, Mode A, 10 kHz bandwidth). The improvement of the second iteration will be as small as 0.3 dB.&lt;br&gt;The recommended number of iterations given in the DRM standard is one iteration (number of iterations = 1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Flip Input Spectrum:&lt;/b&gt; Checking this box will flip or invert the input spectrum. This is necessary if the mixer in the front-end uses the lower side band.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Mute Audio:&lt;/b&gt; The audio can be muted by checking this box. The reaction of checking or unchecking this box is delayed by approx. 1 second due to the audio buffers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Reverberation Effect:&lt;/b&gt; If this check box is checked, a reverberation effect is applied each time an audio drop-out occurs. With this effect it is possible to mask short drop-outs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Freq:&lt;/b&gt; In this edit control, the current selected frequency on the front-end can be specified. This frequency will be written into the log file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Channel Estimation Settings:&lt;/b&gt; With these settings, the channel estimation method in time and frequency direction can be selected. The default values use the most powerful algorithms. For more detailed information about the estimation algorithms there are a lot of papers and books available.&lt;br&gt;&lt;b&gt;Wiener:&lt;/b&gt; Wiener interpolation method uses estimation of the statistics of the channel to design an optimal filter for noise reduction.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Channel Estimation Settings:&lt;/b&gt; With these settings, the channel estimation method in time and frequency direction can be selected. The default values use the most powerful algorithms. For more detailed information about the estimation algorithms there are a lot of papers and books available.&lt;br&gt;&lt;b&gt;Linear:&lt;/b&gt; Simple linear interpolation method to get the channel estimate. The real and imaginary parts of the estimated channel at the pilot positions are linearly interpolated. This algorithm causes the lowest CPU load but performs much worse than the Wiener interpolation at low SNRs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Channel Estimation Settings:&lt;/b&gt; With these settings, the channel estimation method in time and frequency direction can be selected. The default values use the most powerful algorithms. For more detailed information about the estimation algorithms there are a lot of papers and books available.&lt;br&gt;&lt;b&gt;DFT Zero Pad:&lt;/b&gt; Channel estimation method for the frequency direction using Discrete Fourier Transformation (DFT) to transform the channel estimation at the pilot positions to the time domain. There, a zero padding is applied to get a higher resolution in the frequency domain -&gt; estimates at the data cells. This algorithm is very speed efficient but has problems at the edges of the OFDM spectrum due to the leakage effect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Guard Energy:&lt;/b&gt; Time synchronization tracking algorithm utilizes the estimation of the impulse response. This method tries to maximize the energy in the guard-interval to set the correct timing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;First Peak:&lt;/b&gt; This algorithms searches for the first peak in the estimated impulse response and moves this peak to the beginning of the guard-interval (timing tracking algorithm).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;SNR:&lt;/b&gt; Signal to Noise Ratio (SNR) estimation based on FAC cells. Since the FAC cells are only located approximately in the region 0-5 kHz relative to the DRM DC frequency, it may happen that the SNR value is very high although the DRM spectrum on the left side of the DRM DC frequency is heavily distorted or disturbed by an interferer so that the true overall SNR is lower as indicated by the SNR value. Similarly, the SNR value might show a very low value but audio can still be decoded if only the right side of the DRM spectrum is degraded by an interferer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;MSC WMER / MSC MER:&lt;/b&gt; Modulation Error Ratio (MER) and weighted MER (WMER) calculated on the MSC cells is shown. The MER is calculated as follows: For each equalized MSC cell (only MSC cells, no FAC cells, no SDC cells, no pilot cells), the error vector from the nearest ideal point of the constellation diagram is measured. The squared magnitude of this error is found, and a mean of the squared errors is calculated (over one frame). The MER is the ratio in [dB] of the mean of the squared magnitudes of the ideal points of the constellation diagram to the mean squared error. This gives an estimate of the ratio of the total signal power to total noise power at the input to the equalizer for channels with flat frequency response.&lt;br&gt; In case of the WMER, the calculations of the means are multiplied by the squared magnitude of the estimated channel response.&lt;br&gt;For more information see ETSI TS 102 349.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;DRM Mode / Bandwidth:&lt;/b&gt; In a DRM system, four possible robustness modes are defined to adapt the system to different channel conditions. According to the DRM standard:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Mode A:&lt;/i&gt; Gaussian channels, with minor fading&lt;/li&gt;&lt;li&gt;&lt;i&gt;Mode B:&lt;/i&gt; Time and frequency selective channels, with longer delay spread&lt;/li&gt;&lt;li&gt;&lt;i&gt;Mode C:&lt;/i&gt; As robustness mode B, but with higher Doppler spread&lt;/li&gt;&lt;li&gt;&lt;i&gt;Mode D:&lt;/i&gt; As robustness mode B, but with severe delay and Doppler spread&lt;/li&gt;&lt;/ul&gt;The bandwith is the gross bandwidth of the current DRM signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Interleaver Depth:&lt;/b&gt; The symbol interleaver depth can be either short (approx. 400 ms) or long (approx. 2 s). The longer the interleaver the better the channel decoder can correct errors from slow fading signals. But the longer the interleaver length the longer the delay until (after a re-synchronization) audio can be heard.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;SDC / MSC Mode:&lt;/b&gt; Shows the modulation type of the SDC and MSC channel. For the MSC channel, some hierarchical modes are defined which can provide a very strong protected service channel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Prot. Level (B/A):&lt;/b&gt; The error protection level of the channel coder. For 64-QAM, there are four protection levels defined in the DRM standard. Protection level 0 has the highest protection whereas level 3 has the lowest protection. The letters A and B are the names of the higher and lower protected parts of a DRM block when Unequal Error Protection (UEP) is used. If Equal Error Protection (EEP) is used, only the protection level of part B is valid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Number of Services:&lt;/b&gt; This shows the number of audio and data services transmitted in the DRM stream. The maximum number of streams is four.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Received time - date:&lt;/b&gt; This label shows the received time and date in UTC. This information is carried in the SDC channel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Save Audio as WAV:&lt;/b&gt; Save the audio signal as stereo, 16-bit, 48 kHz sample rate PCM wave file. Checking this box will let the user choose a file name for the recording.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Chart Selector:&lt;/b&gt; With the chart selector different types of graphical display of parameters and receiver states can be chosen. The different plot types are sorted in different groups. To open a group just double-click on the group or click on the plus left of the group name. After clicking on an item it is possible to choose other items by using the up / down arrow keys. With these keys it is also possible to open and close the groups by using the left / right arrow keys.&lt;br&gt;A separate chart window for a selected item can be opened by right click on the item and click on the context menu item.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Interferer Rejection:&lt;/b&gt; There are two algorithms available to reject interferers:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Bandpass Filter (BP-Filter):&lt;/b&gt; The bandpass filter is designed to have the same bandwidth as the DRM signal. If, e.g., a strong signal is close to the border of the actual DRM signal, under some conditions this signal will produce interference in the useful bandwidth of the DRM signal although it is not on the same frequency as the DRM signal. The reason for that behaviour lies in the way the OFDM demodulation is done. Since OFDM demodulation is a block-wise operation, a windowing has to be applied (which is rectangular in case of OFDM). As a result, the spectrum of a signal is convoluted with a Sinc function in the frequency domain. If a sinusoidal signal close to the border of the DRM signal is considered, its spectrum will not be a distinct peak but a shifted Sinc function. So its spectrum is broadened caused by the windowing. Thus, it will spread in the DRM spectrum and act as an in-band interferer.&lt;br&gt;There is a special case if the sinusoidal signal is in a distance of a multiple of the carrier spacing of the DRM signal. Since the Sinc function has zeros at certain positions it happens that in this case the zeros are exactly at the sub-carrier frequencies of the DRM signal. In this case, no interference takes place. If the sinusoidal signal is in a distance of a multiple of the carrier spacing plus half of the carrier spacing away from the DRM signal, the interference reaches its maximum.&lt;br&gt;As a result, if only one DRM signal is present in the 20 kHz bandwidth, bandpass filtering has no effect. Also,  if the interferer is far away from the DRM signal, filtering will not give much improvement since the squared magnitude of the spectrum of the Sinc function is approx -15 dB down at 1 1/2 carrier spacing (approx 70 Hz with DRM mode B) and goes down to approx -30 dB at 10 times the carrier spacing plus 1 / 2 of the carrier spacing (approx 525 Hz with DRM mode B). The bandpass filter must have very sharp edges otherwise the gain in performance will be very small.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Modified Metrics:&lt;/b&gt; Based on the information from the SNR versus sub-carrier estimation, the metrics for the Viterbi decoder can be modified so that sub-carriers with high noise are attenuated and do not contribute too much to the decoding result. That can improve reception under bad conditions but may worsen the reception in situations where a lot of fading happens and no interferer are present since the SNR estimation may be not correct.&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>systemevalDlgBase</name>
    <message>
        <source>System Evaluation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SNR:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MSC WMER / MSC MER:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DC Frequency of DRM Signal:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Frequency Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Doppler / Delay:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SNR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MER</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FreqOffset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SampFreqOffset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wiener</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MSC CRC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SDC CRC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FAC CRC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frame Sync:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time Sync Acq:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I/O Interface:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACDRMModeBWL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACInterleaverDepthL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACSDCMSCModeL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACCodeRateL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACNumServicesL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACTimeDateL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACDRMModeBWV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACInterleaverDepthV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACSDCMSCModeV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACCodeRateV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACNumServicesV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FACTimeDateV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chart Selector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-InpPSD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-InpSpectr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-Waterfall</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-ShiftedPSD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-AudSpectr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-SNRSpectr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-Channel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-IR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-TF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-Constellation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-FAC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-SDC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-MSC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-SNRAudiHist</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-DelDopp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D-FreqSam</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Channel Estimation: Frequency Interpolation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DFT Zero Pad.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Channel Estimation: Time Interpolation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time Sync Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guard Energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>First Peak</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Misc Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextNumOfIterations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Log File, Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>kHz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Interferer Rejection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Flip Input Spectrum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mute &amp;Audio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Log File, Freq:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save Audio as WAV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reverberation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bandpass Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Modified &amp;Metrics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message encoding="UTF-8">
        <source>Lat: 53.123??   Long: 00.456??</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>24/01/2007 15:14.33 UTC</source>
        <translation type="unfinished"></translation>
    </message>
    <message encoding="UTF-8">
        <source>10.0 m/s  151??</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
